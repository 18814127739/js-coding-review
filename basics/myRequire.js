var require = (function () {
	var cache = {
		// [key]: module
	};

	window.define = function (dependency, factory) {
		if (typeof factory === 'function') {
			const script = document.currentScript;
			const moduleKey = script.getAttribute('moduleKey');
			if (cache[moduleKey]) {
				const data = factory();
				cache[moduleKey].resolve(data);
			}
		}
	}
	define.amd = true;

	class Loader {
		constructor(key) {
			this.key = key;
			this.promise = new Promise((resolve, reject) => {
				this.resolve = resolve;
				this.reject = reject;
			});
			this.load();
		}

		load() {
			const script = document.createElement('script');
			script.setAttribute('moduleKey', this.key);
			script.src = this.key;
			document.head.appendChild(script);
		}
	}

	function require(key) {
		let module = cache[key];
		if (!module) {
			module = cache[key] = new Loader(key);
		}
		return module.promise;
	}

	return require;
})();

