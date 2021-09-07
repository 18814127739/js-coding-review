(function (root, factory) {
	if (typeof exports === 'object' && module === 'object') {
		module.exports = factory();
	} else if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else {
		const data = factory();
		for (let i in data) {
			(typeof exports === 'object' ? exports : root)[i] = data[i];
		}
	}
})(window, function () {
	return {
		name: 'xpy',
		type: 1,
		say: (text) => {
			console.log(text)
		}
	}
});
