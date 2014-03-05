

module.exports = function(name, message) {
  var err = new Error(message);
  err.name = name;
  err.fail = true;
  return err;
}
