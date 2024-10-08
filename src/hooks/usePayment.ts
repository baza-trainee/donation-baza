/* eslint-disable require-atomic-updates */
import axios from 'axios';
import { useState } from 'react';

interface handlePaymentProps {
  paymentAmount: string;
  currency: string;
  type: string;
  lang: string;
}

const url = process.env.NEXT_PUBLIC_API_URL || '';
const MAX_DONATION_AMOUNT = 10000000;

const usePaymentHandler = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayment = async ({
    paymentAmount,
    currency,
    type,
    lang,
  }: handlePaymentProps) => {
    const paymentData = {
      transactionType: 'CREATE_INVOICE',
      merchantDomainName: window.location.hostname,
      apiVersion: 1,
      orderReference: Date.now().toString(),
      orderDate: Date.now(),
      amount: Number(paymentAmount),
      language: lang.toUpperCase(),
      currency,
      productName: ['Baza Donation'],
      productCount: [1],
      productPrice: [Number(paymentAmount)],
      serviceUrl: `${url}/payments/complete`,
      regularMode: type,
    };
    if (Number(paymentAmount) && Number(paymentAmount) < MAX_DONATION_AMOUNT) {
      try {
        const response = await axios.post(`${url}/payments`, paymentData);
        const checkoutUrl = response.data?.invoiceUrl;
        if (checkoutUrl) {
          window.location.href = checkoutUrl;
        }
      } catch (error) {
        setErrorMessage('Error occurred while processing payment');
        // eslint-disable-next-line no-console
        console.error(error);
      }
    } else {
      setErrorMessage('Please enter a valid payment amount');
    }
  };

  return {
    errorMessage,
    handlePayment,
  };
};
export default usePaymentHandler;
