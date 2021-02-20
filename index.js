var fs = require('fs');

exports.copy_gs = function createConnection(config) {
	console.log('Copying file in module');
	fs.copyFileSync(__dirname+"/lambda-ghostscript-master.zip", '/tmp/lambda-ghostscript-master.zip');
	return ;
};
