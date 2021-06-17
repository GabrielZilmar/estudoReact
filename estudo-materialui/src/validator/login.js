import * as yup from 'yup';

export default {
  loginValidate: (login) => {
    const schema = yup.object().shape({
      email: yup.string()
          .email('Insert a valid e-mail.')
          .required('The e-mail is mandatory.'),
      password: yup.string()
          .required('The password is mandatory.'),
    });

    const options = {
      abortEarly: false,
    };

    return schema.validate(login, options)
        .then((valid) => valid)
        .catch((err) => ({Errors: err.errors}));
  },
};
