import {string} from 'yup';
import {DynamicFormConfig} from '@/forms/types';

const createEmailSchema = ({name, validations = []}: DynamicFormConfig) => {
  let schema = string().email('invalidEmail');
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
      case 'test':
        schema = schema.test(value);
        break;
      default:
        throw new Error(
          `EmailSchema: validation type ${type} not implemented for field ${name}.`,
        );
    }
  });
  return schema;
};

export default createEmailSchema;
