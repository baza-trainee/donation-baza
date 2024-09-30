import createHmac from 'create-hmac';

const { PAYMENT_SECRET_KEY, PAYMENT_MERCHANT_ID } = process.env;

export const paymentSignatureGenerator = (
  data: { [key: string]: string | number },
  merchantAccount = PAYMENT_MERCHANT_ID || '',
  secretKey = PAYMENT_SECRET_KEY || ''
) => {
  const body = {
    merchantAccount,
    merchantDomainName: data.merchantDomainName,
    orderReference: data.orderReference,
    orderDate: data.orderDate,
    amount: data.amount,
    currency: data.currency,
    productName: data.productName,
    productCount: data.productCount,
    productPrice: data.productPrice,
  };
  const valuesString = Object.values(body).flat().join(';');

  return createHmac('md5', secretKey).update(valuesString).digest('hex');
};
