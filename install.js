var task = module.exports,
	path = require('path'),
	Q = null,
	shelljs = null,
	cloudbridge = null,
	projectDir = null;

task.run = function run(cli, targetPath) {
	cloudbridge = cli;
	projectDir = targetPath;
	Q = cloudbridge.require('q');
	shelljs = cloudbridge.require('shelljs');

	return Q()
		.then(copyDependencies);
};

function copyDependencies() {
	var src = path.join(__dirname, 'build', '*'),
		target = path.join(projectDir, 'build');

	shelljs.cp('-Rf', src, target);
};
