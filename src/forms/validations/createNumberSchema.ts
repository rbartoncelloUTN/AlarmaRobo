import {number, NumberSchema} from 'yup';
import {DynamicFormConfig, Validation} from '@/forms/types';

type CreateNumberSchema = (config: DynamicFormConfig) => NumberSchema;

const createNumberSchema: CreateNumberSchema = ({name, validations = []}) => {
  let schema = number().typeError('Ingrese un número válido.');
  validations.forEach(({type, value, message}: Validation) => {
    switch (type) {
      case 'required':
        schema = schema.required(message);
        break;
      case 'integer':
        schema = schema.integer(message);
        break;
      case 'positive':
        schema = schema.positive(message);
        break;
      case 'min':
        schema = schema.min(value, message);
        break;
      case 'max':
        schema = schema.max(value, message);
        break;
      default:
        throw new Error(
          `NumberSchema: validation type ${type} not implemented for field ${name}.`,
        );
    }
  });
  return schema;
};

export default createNumberSchema;
