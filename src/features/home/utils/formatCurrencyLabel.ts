export const formatCurrencyLabel = (currency: string, value: string) => {
  if (value === 'інша сума') return value;
  switch (currency) {
    case 'eur':
      return `${value} euro`;
    case 'zloty':
      return `${value} zł`;
    case 'uah':
      return `${value} грн`;
    default:
      return `${value}`;
  }
};
