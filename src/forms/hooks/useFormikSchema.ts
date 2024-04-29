import {useMemo} from 'react';
import {buildFormSchema} from '../../forms/validations';

const TEMPLATE_REGEX = /\$\{\s*(\w+)\s*}/g;

export const template = (str: string, values: any) =>
  str.replace(TEMPLATE_REGEX, (match, key) => values[key]);

export const isString = (str: any) => typeof str === 'string';

const getOptions = (field: any, options: any, values: any) => {
  let key = template(field.options, values);
  return options[key]?.map((value: any) => ({value, label: value}));
};

const useFormikSchema = (formSchema: any, values: any) =>
  useMemo(() => {
    const hasEnabler = formSchema.enabler
      ? values?.[formSchema.enabler] !== true
      : false;
    const fields = formSchema.fields.map((field: any) => {
      const disabled =
        field.disabled ?? (hasEnabler && field.name !== formSchema.enabler);
      if (!isString(field.options)) {
        // if it has enabler and its value is false, all fields should not have validations
        if (hasEnabler && typeof values?.[formSchema.enabler] === 'boolean') {
          return {
            ...field,
            disabled,
            isReadOnly: true,
          };
        }
        return {...field, disabled};
      }
      return {
        ...field,
        disabled,
        options: getOptions(field, field.options, values) || [],
      };
    });
    const cameraType = fields.find((x: any) => x.type === 'camera');
    if (cameraType) {
      cameraType.fields = fields.filter(
        (field: any) =>
          field.type.startsWith('photo') && field.type !== 'photos',
      );
    }
    const schema = {...formSchema, fields};
    return [schema, buildFormSchema(schema)];
  }, [formSchema, values]);

export default useFormikSchema;
