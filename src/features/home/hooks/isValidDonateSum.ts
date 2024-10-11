import { MAX_DONATION_SUM, MIN_DONATION_SUM } from './useDonationData';

export const isValideDonateSum = (value: string, regex: RegExp) => {
  if (!regex.test(value)) return false;

  const sum = parseInt(value, 10);
  if (sum > MAX_DONATION_SUM || sum < MIN_DONATION_SUM) return false;

  return true;
};
