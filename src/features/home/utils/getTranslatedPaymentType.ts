import { type PAYMENT_SUBSCRIPTION } from '../hooks/useDonationData';
import { useTranslations } from 'next-intl';

export const getTranslatedPaymentType = (value: PAYMENT_SUBSCRIPTION) => {
  const translations = useTranslations('homepage.helpNowSection.payment_type');
  switch (value) {
    case 'ONE_TIME':
      return translations('one_time');
    case 'SUBSCRIPTION':
      return translations('monthly');
    default:
      return value;
  }
};
