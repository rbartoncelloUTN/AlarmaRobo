import {date, DateSchema} from 'yup';
import {DynamicFormConfig} from '@/forms/types';
import {parseDate} from '@/forms/utils';

type CreateDateSchema = (config: DynamicFormConfig) => DateSchema;
const createDateSchema: CreateDateSchema = ({name, validations = []}) => {
  let schema = date().transform(parseDate);
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
      case 'past':
        schema = schema.min(new Date(), message);
        break;
      case 'future':
        schema = schema.max(new Date(), message);
        break;
      case 'before':
        schema = schema.when(value, (field, fieldSchema) =>
          field ? fieldSchema.max(field, message) : fieldSchema,
        );
        break;
      case 'after':
        schema = schema.when(value, (field, fieldSchema) =>
          field ? fieldSchema.min(field, message) : fieldSchema,
        );
        break;
      default:
        throw new Error(
          `Date: validation type ${type} not implemented for field ${name}.`,
        );
    }
  });
  return schema;
};

export default createDateSchema;
