/**
 * @description: Promise练习
 */
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
	constructor(excuator) {
		this.state = PENDING;
		this.value;
		this.reason;
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];

		const resolve = (value) => {
			if (this.state === PENDING) {
				if (value instanceof Promise) {
					resolvePromise(this, value, (v) => {
						this.state = FULFILLED;
						this.value = v;
						this.onFulfilledCallbacks.forEach(fn => fn());
					}, (r) => {
						this.state = REJECTED;
						this.reason = r;
						this.onRejectedCallbacks.forEach(fn => fn());
					});
				} else {
					this.state = FULFILLED;
					this.value = value;
					this.onFulfilledCallbacks.forEach(fn => fn());
				}
			}
		}

		const reject = (reason) => {
			if (this.state === PENDING) {
				this.state = REJECTED;
				this.reason = reason;
				this.onRejectedCallbacks.forEach(fn => fn());
			}
		}

		try {
			excuator(resolve, reject);
		} catch (e) {
			reject(e);
		}
	}

	then(onFulfilled, onRejected) {
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
		onRejected = typeof onRejected === 'function' ? onRejected : (e) => {
			throw e;
		}

		const promise2 = new Promise((resolve, reject) => {
			if (this.state === FULFILLED) {
				setTimeout(() => {
					try {
						const x = onFulfilled(this.value);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
			}
			if (this.state === REJECTED) {
				setTimeout(() => {
					try {
						const x = onRejected(this.reason);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
			}
			if (this.state === PENDING) {
				this.onFulfilledCallbacks.push(() => {
					setTimeout(() => {
						try {
							const x = onFulfilled(this.value);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
				});
				this.onRejectedCallbacks.push(() => {
					setTimeout(() => {
						try {
							const x = onRejected(this.reason);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
				});
			}
		});

		return promise2;
	}
}

const resolvePromise = (promise2, x, resolve, reject) => {
	if (promise2 === x) {
		reject(new TypeError('error'));
	}
	if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
		let called;
		try {
			const then = x.then;
			if (typeof then === 'function') {
				then.call(x, (v) => {
					if (called) return;
					called = true;
					resolvePromise(promise2, v, resolve, reject);
				}, (r) => {
					if (called) return;
					called = true;
					reject(r);
				});
			} else {
				resolve(x);
			}
		} catch (e) {
			if (called) return;
			called = true;
			reject(e);
		}
	} else {
		resolve(x);
	}
}

Promise.defer = Promise.deferred = function () {
	let dfd = {}
	dfd.promise = new Promise((resolve, reject) => {
		dfd.resolve = resolve;
		dfd.reject = reject;
	});
	return dfd;
}

module.exports = Promise;

// promises-aplus-tests p.js
