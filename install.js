var task = module.exports;

task.run = function run(cli, targetPath) {
	var restore = require('./restore');

	return restore.run(cli, targetPath);
};
