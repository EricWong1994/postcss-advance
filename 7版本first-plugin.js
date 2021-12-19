var postcss = require('postcss');
module.exports = postcss.plugin('postcss-test-plugin', function () {
	return function (root) {
		root.walkRules(function (rule) {
			rule.walkDecls(/^overflow-?/, function (decl) {
				// console.log('decl.value: ', decl.value);
				if (decl.value === 'scroll') {
					console.log('rule: ', rule);
					var hasTouch = rule.some(function (i) {
						console.log('i: ', i);
						return i.prop === '-webkit-overflow-scrolling';
					});
					if (!hasTouch) {
						console.log('hasTouch: ', hasTouch);
						rule.append({
							prop: '-webkit-overflow-scrolling',
							value: 'touch',
						});
					}
				}
			});
		});
	};
});
