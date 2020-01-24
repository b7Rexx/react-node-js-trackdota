let JOI = require('@hapi/joi');

/**
 * validate create user
 * @param fields
 * @returns {*}
 */
userValidate = (fields) => {
  return new Promise(function (resolve, reject) {
    let errorStatus = false;
    let firstName = errorParser(JOI.string().max(255).required().validate(fields.firstName));
    errorStatus = firstName.errorStatus ? true : errorStatus;
    let lastName = errorParser(JOI.string().max(255).required().validate(fields.lastName));
    errorStatus = lastName.errorStatus ? true : errorStatus;
    let email = errorParser(JOI.string().max(255).email().required().validate(fields.email));
    errorStatus = email.errorStatus ? true : errorStatus;
    let password = errorParser(JOI.string().min(6).max(255).required().validate(fields.password));
    errorStatus = password.errorStatus ? true : errorStatus;

    let errors = {
      firstName: firstName.error,
      lastName: lastName.error,
      email: email.error,
      password: password.error,
    };
    let values = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    if (errorStatus)
      reject(errors);
    else
      resolve(values);
  });
};

/**
 * validate login attempt
 * @param fields
 * @returns {*}
 */
loginValidate = (fields) => {
  return new Promise(function (resolve, reject) {
    let errorStatus = false;
    let email = errorParser(JOI.string().email().required().validate(fields.email));
    errorStatus = email.errorStatus ? true : errorStatus;
    let password = errorParser(JOI.required().validate(fields.password));
    errorStatus = password.errorStatus ? true : errorStatus;

    let errors = {
      email: email.error,
      password: password.error,
    };
    let values = {
      email: email.value,
      password: password.value,
    };

    if (errorStatus)
      reject(errors);
    else
      resolve(values);
  });
};

/**
 *
 * @param fields
 * @returns {*}
 */
tournamentValidate = (fields) => {
  const schema = JOI.object({
    title: JOI.string().required(),
    detail: JOI.string().allow(null, ''),
    startDate: JOI.date().allow(null, ''),
    endDate: JOI.date().allow(null, ''),
    createdBy: JOI.number().required(),
  });

  return schema.validate(fields);
};

/**
 * returns value with error boolean message
 * @param JOIObject
 */
errorParser = (JOIObject) => {
  const {error, value} = JOIObject;
  let errorMsg = null;
  if (error)
    errorMsg = error.details[0].message;
  return {
    errorStatus: !!error,
    error: errorMsg,
    value: value,
  };
};

module.exports = {
  userValidate,
  loginValidate,
  tournamentValidate
};
