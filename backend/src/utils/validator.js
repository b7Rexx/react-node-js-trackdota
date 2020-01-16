let joi = require('@hapi/joi');

/**
 * validate create user
 * @param fields
 * @returns {*}
 */
userValidate = (fields) => {
  const schema = joi.object({
    firstName: joi.string().max(255).required(),
    lastName: joi.string().max(255).required(),
    email: joi.string().max(255).email().required(),
    password: joi.string().min(6).max(255).required(),
  });

  return schema.validate(fields);
};

/**
 * validate login attempt
 * @param fields
 * @returns {*}
 */
loginValidate = (fields) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.required(),
  });

  return schema.validate(fields);
};

module.exports = {
  userValidate,
  loginValidate,
};
