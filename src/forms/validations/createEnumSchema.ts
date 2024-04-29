import {mixed} from 'yup';
import {DynamicFormConfig} from '@/forms/types';

const createEnumSchema = ({
  name,
  options,
  validations = [],
}: DynamicFormConfig) => {
  let schema = mixed();
  if (options) {
    schema = schema.oneOf(options.map(option => option.value));
  }
  validations.forEach(({type, message}) => {
    switch (type) {
      case 'required':
        schema = schema.required(message);
        break;
      case 'max':
        break;
      default:
        throw new Error(
          `EnumSchema: validation type ${type} not implemented for field ${name}.`,
        );
    }
  });
  return schema;
};

export default createEnumSchema;
