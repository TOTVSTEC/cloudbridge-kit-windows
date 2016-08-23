var task = module.exports,
	path = require('path'),
	Q = null,
	shelljs = null,
	cloudbridge = null;

task.run = function run(cli, projectData) {
	cloudbridge = cli;
	Q = cloudbridge.require('q');
	shelljs = cloudbridge.require('shelljs');

	return Q()
		.then(copyDependencies)
}

function copyDependencies() {
	var src = path.join(__dirname, 'build', '*'),
		target = path.join(cloudbridge.projectDir, 'build');

	shelljs.cp('-Rf', src, target);
};