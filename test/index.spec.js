const postcss = require('postcss');
// const plugin = require('../7版本first-plugin');
const plugin = require('../first-plugin');

// 擦
it('postcss-font-weight', async () => {
	// const result = await postcss([plugin()]).process(
	// 	`.one {overflow: scroll;}`
	// );

	const result = await postcss([plugin()]).process(
		`.one {overflow: scroll;}`,
		{ from: undefined }
	);
	// const result = await postcss([plugin()]).process(`
	//     .one {
	//         overflow: scroll;
	//     }
	// `);
	// const root = postcss.parse('a { color: black }');
	// const root = postcss.parse('.one { overflow: scroll }');
	// const decl = root.first.first;
	// decl.type       //=> 'decl'
	// console.log('decl.type: ', decl.type);
	// decl.toString() //=> ' color: black'
	// console.log('decl.toString(): ', decl.toString());
	// expect(result.css.replace(/\s/g, '')).toEqual(
	// 	`
	//     .one {
	//         overflow: scroll;
	//         -webkit-overflow-scrolling: touch;
	//     }
	// `.replace(/\s/g, '')
	// );
});
