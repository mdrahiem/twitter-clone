import commonValidation from './commonValidation';

const signInValidate = values => {
  const errors = {};
  errors.userName = commonValidation.requiredValidation(values.userName, 'User Name');
  errors.password = commonValidation.requiredValidation(values.password, 'Password');
  return errors;
};

export default {
  signInValidate
};
