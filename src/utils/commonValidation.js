const requiredValidation = (value, fieldName) => {
  return value ? '' : `${fieldName} is Required`;
};

export default {
  requiredValidation
};
