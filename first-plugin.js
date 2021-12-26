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
			root.append({ selector: 'a' });
			// console.log('root: ', root);
			root.walkRules(rule => {
				let count = 0;
				rule.walkDecls(decl => {
					count++;
					// decl.assign({ prop: 'word-wrap', value: 'break-word' });
					// decl.before('color: black');
					// decl.after('color: black'); // 报错
					// decl.cloneAfter(); // 报错
					// decl.cloneAfter({ prop: '-moz-' + decl.prop });// 报错
					// decl.cloneBefore({ prop: '-moz-' + decl.prop });
					// insertBefore:
					// rule.insertBefore(
					// 	decl,
					// 	decl.clone({ prop: '-webkit-' + decl.prop })
					// );
					// rule.insertAfter(
					// 	decl,
					// 	decl.clone({ prop: '-webkit-' + decl.prop })
					// ); // 死循环
					if (count === 2) {
						// break; // Unsyntactic break
						return; // return 终止不了walkDecls方法
					}
					// console.log('decl.parent.nodes[0]: ', decl.parent.nodes[0]);
				});
				// rule.each(decl => {
				// 	decl.after('color: black'); // 报错
				// 	console.log('decl: ', decl);
				// });
			});
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
