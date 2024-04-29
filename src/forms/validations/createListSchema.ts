import {array, mixed} from 'yup';
import {DynamicFormConfig} from '@/forms/types';

const createEnumSchema = ({
  name,
  options,
  validations = [],
}: DynamicFormConfig) => {
  let schema = array().of(
    mixed().oneOf(options?.map(option => option.value) || []),
  );
  validations.forEach(({type, value, message}: any) => {
    switch (type) {
      case 'required':
        schema = schema.required(message);
        break;
      case 'min':
        schema = schema.min(value, message);
        break;
      case 'max':
        schema = schema.max(value, message);
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
