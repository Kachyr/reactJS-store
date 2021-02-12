import * as yup from 'yup';

export const validateProduct = {
  shape: {
    name: '',
    origin: '',
    price: ''
  },
  schema: yup.object().shape({
    name: yup
      .string()
      .min(5, 'Need min 6 letters')
      .max(25, 'That is to much letters')
      .matches(/(^[a-zA-Z\s]*$)/, 'There is can be only letters!')
      .required('Name of product is required!'),
    origin: yup.string().required('Chose origin of the product!'),
    price: yup.string().required('Price is required!')
  })
};
