import { CURRENCY_NAMES } from '../hooks/useDonationData';

export default function isCurrencyValue(
  value: string
): value is CURRENCY_NAMES {
  return Object.values(CURRENCY_NAMES).includes(value as CURRENCY_NAMES);
}
