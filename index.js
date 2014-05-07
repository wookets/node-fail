

exports.BadRequest = function(message, data) {
  var err = new Error(message);
  err.name = 'BadRequest';
  err.status = 400;
  err.data = data;
  return err;
};

exports.NotAuthorized = function(message, data) {
  var err = new Error(message);
  err.name = 'NotAuthorized';
  err.status = 400;
  err.data = data;
  return err;
};

exports.NotFound = function(message, data) {
  var err = new Error(message);
  err.name = 'NotFound';
  err.status = 404;
  err.data = data;
  return err;
};

exports.InternalServerError = function(message, data) {
  var err = new Error(message);
  err.name = 'InternalServerError';
  err.status = 500;
  err.data = data;
  return err;
};