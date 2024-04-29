import formatDateValue from '@/forms/utils/formatDateValue';

/**
 * Formats the values before pass them to the onSubmit handler
 */
const formatValues = (values: any, fields: any) => {
  const data = {...values};
  fields
    .filter((field: {type: string}) => field.type === 'date')
    .forEach((field: {name: string | number}) => {
      data[field.name] = formatDateValue(values[field.name]);
    });
  return data;
};

export default formatValues;
