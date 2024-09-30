import { NextResponse } from 'next/server';
import axios from 'axios';
import { paymentSignatureGenerator } from '@/utils/paymentSignatureGenerator';

const merchantAccount = process.env.PAYMENT_MERCHANT_ID || '';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const body = {
      ...data,
      merchantAccount,
      merchantSignature: paymentSignatureGenerator(data),
    };
    const response = (await axios.post('https://api.wayforpay.com/api', body))
      .data;
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return new NextResponse(`Can't get payment url ${error}`, { status: 500 });
  }
}
