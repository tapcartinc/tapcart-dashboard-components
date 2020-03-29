const useFormattedNumber = num => {
  let number = Number(num);
  if (number > 999999) {
    number = Math.sign(number) * (Math.abs(number) / 1000000).toFixed(2) + "M";
    return number;
  }
  if (number > 999) {
    number = Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + "k";
    return number;
  }
  if (number < 999) {
    number = Math.sign(number) * Math.abs(number);
    return number;
  }
  return number;
};

export { useFormattedNumber };
