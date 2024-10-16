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
    [CURRENCY_NAMES.PLN]: '15',
  },
  MAX: {
    [CURRENCY_NAMES.UAH]: '100',
    [CURRENCY_NAMES.EUR]: '50',
    [CURRENCY_NAMES.PLN]: '80',
  },
};

export enum DEFAULT_AMOUNTS {
  UAH = '20',
  EUR = '5',
  PLN = '10',
}

export const DEFAULT_CURRENCY = CURRENCY_NAMES.UAH;

export enum REGULAR_MODES {
  NONE = 'NONE',
  MONTHLY = 'MONTHLY',
}

export const DEFAULT_TYPE = REGULAR_MODES.NONE;
