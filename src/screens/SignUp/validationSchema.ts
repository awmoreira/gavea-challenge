import * as yup from 'yup';

const schema = yup.object().shape({
  fullname: yup.string().required('Campo obrigatório'),
  email: yup
    .string()
    .email('Por favor digite um e-mail válido.')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'Mínimo de 6 caracteres.')
    .required('Campo obrigatório'),
  confirmation: yup
    .string()
    .min(6, 'Mínimo de 6 caracteres.')
    .required('Campo obrigatório'),
});

export default schema;
