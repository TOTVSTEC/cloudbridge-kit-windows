var task = module.exports,
	path = require('path'),
	shelljs = null;

task.run = function run(cli, projectData) {
	shelljs = cli.require('shelljs');

	var target = path.join(cli.projectDir, 'build', 'windows');

	shelljs.rm('-rf', target);
};
