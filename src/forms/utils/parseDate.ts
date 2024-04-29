
type ParseDate = (
  value: Date,
  originalValue: {day: string; month: string; year: string},
) => Date | undefined;

const parseDate: ParseDate = (value, originalValue): Date | undefined => {
  if (originalValue && typeof originalValue === 'object') {
    const {day, month, year} = originalValue;
    if (!day || !month || !year) {
      return undefined;
    }
    const input = new Date(`${year}-${month}-${day}`);
    return DateUtilService.isValidDate(input) ? input : undefined;
  }
  return value;
};

export default parseDate;
