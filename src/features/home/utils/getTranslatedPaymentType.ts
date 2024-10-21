import { REGULAR_MODES } from '@/constants/payment.constant';
import { useTranslations } from 'next-intl';

export const getTranslatedPaymentType = (value: string) => {
  const translations = useTranslations('homepage.helpNowSection.payment_type');
  switch (value) {
    case REGULAR_MODES.NONE:
      return translations('one_time');
    case REGULAR_MODES.MONTHLY:
      return translations('monthly');
    default:
      return value;
  }
};
