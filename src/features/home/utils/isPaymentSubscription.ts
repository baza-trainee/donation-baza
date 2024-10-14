import { PAYMENT_SUBSCRIPTIONS } from '@/constants/payment.constant';

export default function isPaymentSubscription(
  value: string
): value is PAYMENT_SUBSCRIPTIONS {
  return Object.values(PAYMENT_SUBSCRIPTIONS).includes(
    value as PAYMENT_SUBSCRIPTIONS
  );
}
