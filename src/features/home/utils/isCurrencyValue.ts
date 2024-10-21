import { CURRENCY_NAMES } from '@/constants/payment.constant';

export default function isCurrencyValue(
  value: string
): value is CURRENCY_NAMES {
  return Object.values(CURRENCY_NAMES).includes(value as CURRENCY_NAMES);
}
