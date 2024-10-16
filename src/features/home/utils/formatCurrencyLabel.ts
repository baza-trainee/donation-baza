import { CURRENCY_NAMES } from '@/constants/payment.constant';
import { useTranslations } from 'next-intl';

export const formatCurrencyLabel = (
  currency: CURRENCY_NAMES,
  value: string
) => {
  const translations = useTranslations('homepage.helpNowSection');

  if (value === translations('custom_sum')) return value;
  switch (currency) {
    case CURRENCY_NAMES.EUR:
      return `${value} ${translations('payment_sum_label.eur')}`;
    case CURRENCY_NAMES.PLN:
      return `${value} ${translations('payment_sum_label.zl')}`;
    case CURRENCY_NAMES.UAH:
      return `${value} ${translations('payment_sum_label.uah')}`;
    default:
      return `${value}`;
  }
};
