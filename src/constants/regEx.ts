/* eslint-disable require-unicode-regexp */
export const emailPattern =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;
export const restrictedDomains = /(?:\.ru|\.by)$/;
export const REG_EXP_DONATION_NUMBER = /^[1-9]\d*$/;
