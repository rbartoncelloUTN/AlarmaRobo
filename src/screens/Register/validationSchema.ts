import {object, string} from 'yup';

const validationSchema = object({
  username: string()
    .min(7, 'Email invalido')
    .max(50, 'Email invalido')
    .required('Requerido'),
  password: string()
    .min(6, 'Clave invalida, como minimo 6 caracteres')
    .max(50, 'Clave invalida')
    .required('Requerido'),
});

export default validationSchema;
