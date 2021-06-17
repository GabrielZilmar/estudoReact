import * as yup from 'yup';

export default {
  registrationValidate: (registration) => {
    const schema = yup.object().shape({
      firstName: yup.string()
          .required('The first name is mandatory.'),
      lastName: yup.string()
          .required('The last name is mandatory.'),
      email: yup.string()
          .email('Insert a valid e-mail.')
          .required('The e-mail is mandatory.'),
      password: yup.string()
          .required('The password is mandatory.'),
      passwordConfirm: yup.string()
          .required('The password confirm is mandatory.'),
    });

    const options = {
      abortEarly: false,
    };

    return schema.validate(registration, options)
        .then((valid) => {
          if (valid.password !== valid.passwordConfirm) {
            return {Errors: ['Passwords Must Match!']};
          }
          return true;
        })
        .catch((err) => ({Errors: err.errors}));
  },
};
