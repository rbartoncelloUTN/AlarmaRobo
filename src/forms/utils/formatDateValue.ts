type DateValue = {
  day?: number;
  month?: number;
  year?: number;
};
const formatDateValue = (value = {}) => {
  const {day, month, year} = (value || {}) as DateValue;
  return day && month && year
    ? new Date(year, month, day).toISOString()
    : undefined;
};

export default formatDateValue;
