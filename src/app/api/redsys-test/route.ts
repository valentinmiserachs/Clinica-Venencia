import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET(request: Request) {
  // Detectamos si queremos probar Bizum ('z') o Tarjeta ('C')
  const { searchParams } = new URL(request.url);
  const isBizum = searchParams.get('bizum') === 'true';

  // Generamos un número de pedido único de 12 dígitos[cite: 4]
  const orderId = Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');

  // Parámetros obligatorios para el BBVA[cite: 4]
  const params = {
    DS_MERCHANT_MERCHANTCODE: '370479370',
    DS_MERCHANT_TERMINAL: '001',
    DS_MERCHANT_TRANSACTIONTYPE: '0', // 0 = Autorización estándar[cite: 4]
    DS_MERCHANT_AMOUNT: '100', // 1,00€ (en céntimos)[cite: 4]
    DS_MERCHANT_CURRENCY: '978', // 978 = Euro[cite: 4]
    DS_MERCHANT_ORDER: orderId,
    DS_MERCHANT_MERCHANTURL: 'https://www.google.com',
    DS_MERCHANT_URLOK: 'https://www.google.com',
    DS_MERCHANT_URLKO: 'https://www.google.com',
    DS_MERCHANT_PAYMETHODS: isBizum ? 'z' : 'C' // 'z' para Bizum, 'C' para Tarjeta[cite: 4]
  };

  // 1. Codificamos los parámetros en Base64
  const paramsBase64 = Buffer.from(JSON.stringify(params)).toString('base64');

  // 2. Encriptación 3DES del Número de Pedido con la Clave Secreta de TEST
  const secretKey = 'sq7HjrUOBfKmC576ILgskD5srU870gJ7'; 
  const key = Buffer.from(secretKey, 'base64');
  const iv = Buffer.alloc(8, 0);
  const cipher = crypto.createCipheriv('des-ede3-cbc', key, iv);
  cipher.setAutoPadding(false);

  let paddedOrderId = orderId;
  while (paddedOrderId.length % 8 !== 0) paddedOrderId += '\0';
  const derivedKey = Buffer.concat([cipher.update(paddedOrderId, 'utf8'), cipher.final()]);

  // 3. Firma HMAC SHA256 de los parámetros en Base64
  const hmac = crypto.createHmac('sha256', derivedKey);
  hmac.update(paramsBase64);
  const signature = hmac.digest('base64');

  // Generamos el HTML que auto-dispara el pago a la URL de pruebas del BBVA[cite: 1]
  const html = `
    <html>
      <body onload="document.forms[0].submit()" style="font-family: sans-serif; padding: 2rem;">
        <h2>Iniciando simulación de pago en BBVA...</h2>
        <p>Método: <strong>${isBizum ? 'BIZUM' : 'TARJETA'}</strong></p>
        <form action="https://sis-t.redsys.es:25443/sis/realizarPago" method="POST">
          <input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1" />
          <input type="hidden" name="Ds_MerchantParameters" value="${paramsBase64}" />
          <input type="hidden" name="Ds_Signature" value="${signature}" />
        </form>
      </body>
    </html>
  `;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}