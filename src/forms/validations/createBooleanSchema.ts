import {boolean, BooleanSchema} from 'yup';
import {DynamicFormConfig} from '@/forms/types';

type CreateBooleanSchema = (config: DynamicFormConfig) => BooleanSchema;

const createBooleanSchema: CreateBooleanSchema = ({name, validations = []}) => {
  let schema = boolean();
  validations.forEach(({type, message}) => {
    switch (type) {
      case 'required':
        schema = schema.required(message).oneOf([true], message);
        break;
      default:
        throw new Error(
          `BooleanSchema: validation type ${type} not implemented for field ${name}.`,
        );
    }
  });
  return schema;
};

export default createBooleanSchema;
