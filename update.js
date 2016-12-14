var task = module.exports,
	Q = null;

task.run = function run(cli, targetPath) {
	Q = cli.require('q');

	return Q()
		.then(function() {
			var remove = require('./remove');

			return remove.run(cli, targetPath);
		})
		.then(function() {
			var install = require('./install');

			return install.run(cli, targetPath);
		});
};
