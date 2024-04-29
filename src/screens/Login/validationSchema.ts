import {object, string} from 'yup';

const validationSchema = object({
  username: string()
    .min(7, 'Usuario invalido')
    .max(50, 'Usuario invalido')
    .required('Requerido'),
  password: string()
    .min(6, 'Clave invalida')
    .max(50, 'Clave invalida')
    .required('Requerido'),
});

export default validationSchema;
