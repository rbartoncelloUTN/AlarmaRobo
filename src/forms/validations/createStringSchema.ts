import {ref, string, StringSchema} from 'yup';
import {equalsTo} from './extensions';
import {DynamicFormConfig} from '@/forms/types';

type CreateStringSchema = (config: DynamicFormConfig) => StringSchema;

const createStringSchema: CreateStringSchema = ({name, validations = []}) => {
  let schema = string();
  validations.forEach(({type, value, message}: any) => {
    switch (type) {
      case 'nullable':
        // @ts-ignore
        schema = schema.nullable();
        break;
      case 'required':
        schema = schema.required(message);
        break;
      case 'min':
        schema = schema.min(value, message);
        break;
      case 'max':
        schema = schema.max(value, message);
        break;
      case 'matches':
        schema = schema.matches(value, message);
        break;
      case 'equals':
        schema = schema.test(equalsTo(ref(value), message));
        break;
      case 'url':
        schema = schema.url(message);
        break;
      case 'test':
        schema = schema.test(value);
        break;
      default:
        throw new Error(
          `StringSchema: validation type ${type} not implemented for field ${name}.`,
        );
    }
  });
  return schema;
};

export default createStringSchema;
