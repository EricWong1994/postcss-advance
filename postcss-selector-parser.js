// https://github.com/postcss/postcss-selector-parser

const parser = require('postcss-selector-parser');
const processor = parser();

let result = processor.processSync(' .class');
console.log(result);
// =>  .class

// Asynchronous operation
let promise = processor.process(' .class').then(result => {
	console.log(result);
	// => .class
});

// lossless - When true, whitespace is preserved. Defaults to true.
const normalized = parser().processSync('h1, h2, h3', { lossless: false });
// console.log('normalized: ', normalized);
// -> h1,h2,h3

const transform = selectors => {
	selectors.walk(selector => {
		// do something with the selector
		console.log(String(selector));
	});
};

const transformed = parser(transform).processSync('h1, h2, h3');
console.log('transformed: ', transformed);
