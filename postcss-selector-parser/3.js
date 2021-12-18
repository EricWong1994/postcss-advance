const parser = require('postcss-selector-parser');
const cloned = parser.id({ value: 'search' });
// console.log('cloned: ', cloned); // ID { value: 'search', spaces: { before: '', after: '' }, type: 'id' }
// console.log('typeof cloned: ', typeof cloned); // object
// console.log(String(cloned)); // #search

// // Input: h1 h2
// selectors.at(0).nodes.length   // => 3
// selectors.at(0).nodes[0].value // => 'h1'
// selectors.at(0).nodes[1].value // => ' '

// selectors.walk(selector => {
// 	let temp = selectors.at(0).nodes.length;
// });

const transform = selectors => {
	// console.log('selectors: ', selectors);
	// console.log('selectors.nodes: ', selectors.nodes); // array类型
	// let temp1 = selectors.at(0).nodes.length; // => 3
	// let temp2 = selectors.at(0).nodes[0].value; // => 'h1'
	// let temp3 = selectors.at(0).nodes[1].value; // => ' '
	// let temp4 = selectors.at(0).nodes[2].value; // => 'h2'
	// console.log('temp1', temp1);
	// console.log('temp2', temp2);
	// console.log('temp3', temp3);
	selectors.walk((selector, index) => {
		console.log('selector: ', selector);
		// all nodes
	});
};

const transformed = parser(transform).processSync('h1 h2');
