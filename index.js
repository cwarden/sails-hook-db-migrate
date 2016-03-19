var checkPending = require('./lib/check-pending');

module.exports = function dbMigrateHook(sails) {
	return {
		initialize: function(callback) {
			sails.on('hook:orm:loaded', checkPending.bind(null, sails, callback));
		}
	};
};
