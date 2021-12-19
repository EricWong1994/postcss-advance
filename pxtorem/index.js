var fs = require('fs');
var path = require('path');
var postcss = require('postcss');
var pxtorem = require('postcss-pxtorem');

var css = fs.readFileSync(path.resolve(__dirname, 'main.css'), 'utf8');
// var css = fs.readFileSync('./main.css', 'utf8');
var options = {
	replace: false,
};
var processedCss = postcss(pxtorem(options)).process(css).css;

// fs.writeFile('./main-rem.css', processedCss, function (err) {
fs.writeFile(
	path.resolve(__dirname, './main-rem.css'),
	processedCss,
	function (err) {
		if (err) {
			throw err;
		}
		console.log('Rem file written.');
	}
);
