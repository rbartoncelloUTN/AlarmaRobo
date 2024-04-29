import {object} from 'yup';
import {isReadOnlyField} from '../utils';
import createSchema from './createSchema';
import {DynamicFormConfig} from '@/forms/types';

type BuildFormSchema = {
  fields: DynamicFormConfig[];
};

const buildFormSchema = ({fields}: BuildFormSchema) => {
  const schema: Record<string, any> = {};
  fields
    .filter(field => !isReadOnlyField(field))
    .forEach(field => {
      if (field.name && !Array.isArray(field.name)) {
        schema[field.name] = createSchema(field);
      }
    });
  return object(schema);
};

export default buildFormSchema;
