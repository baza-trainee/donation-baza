import { REGULAR_MODES } from '@/constants/payment.constant';

export default function isPaymentSubscription(
  value: string
): value is REGULAR_MODES {
  return Object.values(REGULAR_MODES).includes(value as REGULAR_MODES);
}
