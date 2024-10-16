import { CURRENCY_NAMES, DONATION_AMOUNTS } from '@/constants/payment.constant';

export default (
  selectedCurrency: CURRENCY_NAMES,
  amount: keyof typeof DONATION_AMOUNTS
) => DONATION_AMOUNTS[amount][CURRENCY_NAMES[selectedCurrency]];
