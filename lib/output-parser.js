module.exports = function outputParser(output) {
	return output.split('\n')
		.filter(function(line) {
			return line.match(/Processed migration/);
		}).map(function(line) {
			return line.replace(/^.*Processed migration (.*)/, 'PENDING MIGRATION: $1 (run grunt db:migrate:up)\n');
		});
};
