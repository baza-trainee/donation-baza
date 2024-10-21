export default (str: string) => {
  const num = parseInt(str, 10);
  return !isNaN(num) && Number.isInteger(num) && num % 1 === 0;
};
