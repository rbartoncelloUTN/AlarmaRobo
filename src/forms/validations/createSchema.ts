import type {AnySchema} from 'yup';
import createBooleanSchema from './createBooleanSchema';
import createDateSchema from './createDateSchema';
import createEmailSchema from './createEmailSchema';
import createEnumSchema from './createEnumSchema';
import createListSchema from './createListSchema';
import createNumberSchema from './createNumberSchema';
import createStringSchema from './createStringSchema';
import {DynamicFormConfig} from '@/forms/types';

type CreateSchema = (field: DynamicFormConfig) => AnySchema;

const createSchema: CreateSchema = field => {
  const validationType = field.validationType || field.type;
  switch (validationType) {
    case 'checkbox':
      return createBooleanSchema(field);
    case 'checkboxList':
      return createListSchema(field);
    case 'date':
      return createDateSchema(field);
    case 'select':
      return createEnumSchema(field);
    case 'email':
      return createEmailSchema(field);
    case 'number':
      return createNumberSchema(field);
    case 'radio':
      return createEnumSchema(field);
    case 'boolean':
    case 'text':
    case 'textArea':
      return createStringSchema(field);
    default:
      throw new Error(
        `createSchema: ${validationType} validation schema not implemented for field ${field.name}.`,
      );
  }
};

export default createSchema;
