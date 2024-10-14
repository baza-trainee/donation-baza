import { PAYMENT_SUBSCRIPTIONS } from '@/constants/payment.constant';
import { useTranslations } from 'next-intl';

export const getTranslatedPaymentType = (value: string) => {
  const translations = useTranslations('homepage.helpNowSection.payment_type');
  switch (value) {
    case PAYMENT_SUBSCRIPTIONS.ONE_TIME:
      return translations('one_time');
    case PAYMENT_SUBSCRIPTIONS.SUBSCRIPTION:
      return translations('monthly');
    default:
      return value;
  }
};
