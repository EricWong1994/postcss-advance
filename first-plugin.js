// 用 module.exports = creator 代替 module.exports = postcss.plugin(name, creator)。

// 返回一个对象，该对象里面包含 postcssPlugin 属性以及 Once 方法，postcssPlugin 属性值为插件名。

// 把之前的插件代码移到 Once 方法里面。

// 在文件的最后加上 module.exports.postcss = true。
var postcss = require('postcss');
// const _ = require('lodash');

// const rootOne = postcss.parse('.one { overflow: scroll; }');
// const rootOne = postcss.parse(`.one {overflow: scroll;}`);

module.exports = opts => {
	return {
		postcssPlugin: 'postcss-test-plugin',
		Once: (root, { result, list, Declaration }) => {
			console.log('root: ', root);
			// let color = new Declaration({ prop: 'color', value: 'black' });
			// root.append(color);
			// root.walkRules(function (rule) {
			// 	rule.walkDecls(/^overflow-?/, function (decl) {
			// 		if (decl.value == 'scroll') {
			// 			var hasTouch = rule.some(function (i) {
			// 				return i.prop === '-webkit-overflow-scrolling';
			// 			});
			// 			if (!hasTouch) {
			// 				rule.append({
			// 					prop: '-webkit-overflow-scrolling',
			// 					value: 'touch',
			// 				});
			// 			}
			// 		}
			// 	});
			// });
		},
	};
};
module.exports.postcss = true;
// Once (root, { Declaration }) {
// 	let color = new Declaration({ prop: 'color', value: 'black' })
// 	root.append(color)
//   }
//   const root = postcss.parse('a { color: black }')
//   const decl = root.first.first
//   decl.type       //=> 'decl'
//   decl.toString() //=> ' color: black'
