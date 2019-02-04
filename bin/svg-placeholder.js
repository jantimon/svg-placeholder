var middleware = require('../index.js');
middleware().listen(3000, function() {
	console.log('local SVG placeholder service launched:');
	console.log('http://localhost:3000/150x150');
	console.log('http://localhost:3000/150x150/eeeeee');
	console.log('http://localhost:3000/250x350/ee00ee/000000');
});
