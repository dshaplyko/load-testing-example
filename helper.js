const timePart = (new Date()).toJSON().split(":").slice(0, 2).join("").replace(/-/gi, "");
const getRandomString = length => {
  const randomChars = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
};

const setCorrelationId = (requestParams, context, ee, next) => {
  const correlationId = `${timePart}-${getRandomString(6)}`;

  requestParams.headers.correlationId = correlationId;
  console.log(requestParams.headers);
  return next(); // MUST be called for the scenario to continue
};

module.exports = {
  setCorrelationId
};