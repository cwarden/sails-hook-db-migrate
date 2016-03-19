var sailsDbMigrate = require('sails-db-migrate').sailsDbMigrate;
var outputParser = require('./output-parser');
module.exports = function checkPending(sails, callback) {
  var checkStdout = function(stdout) {
    var pending = outputParser(stdout);
    pending.forEach(function(line) {
      sails.log.warn(line);
    });
    callback();
  };
  sailsDbMigrate(['up', '--dry-run'], sails, checkStdout);
};
