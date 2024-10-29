import { Locale } from '@/types/common.types';

export enum CURRENCY_NAMES {
  UAH = 'UAH',
  EUR = 'EUR',
  PLN = 'PLN',
}

export const DONATION_AMOUNTS = {
  MIN: {
    [CURRENCY_NAMES.UAH]: '20',
    [CURRENCY_NAMES.EUR]: '5',
    [CURRENCY_NAMES.PLN]: '10',
  },
  AVG: {
    [CURRENCY_NAMES.UAH]: '50',
    [CURRENCY_NAMES.EUR]: '10',
    [CURRENCY_NAMES.PLN]: '20',
  },
  MAX: {
    [CURRENCY_NAMES.UAH]: '100',
    [CURRENCY_NAMES.EUR]: '20',
    [CURRENCY_NAMES.PLN]: '30',
  },
};

export enum DEFAULT_AMOUNTS {
  UAH = '20',
  EUR = '5',
  PLN = '10',
}

export const localeCurrencyMap: Record<Locale, CURRENCY_NAMES> = {
  en: CURRENCY_NAMES.EUR,
  ua: CURRENCY_NAMES.UAH,
  pl: CURRENCY_NAMES.PLN,
};

export const DEFAULT_CURRENCY = CURRENCY_NAMES.UAH;

export enum REGULAR_MODES {
  NONE = 'none',
  MONTHLY = 'monthly',
}

export const DEFAULT_TYPE = REGULAR_MODES.NONE;
