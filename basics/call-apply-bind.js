Function.prototype.myCall = function (context, ...args) {
	args = args || [];
	const key = Symbol();
	context[key] = this;
	const res = context[key](...args);
	delete context[key];
	return res;
}

Function.prototype.myApply = function (context, args = []) {
	const key = Symbol();
	context[key] = this;
	const res = context[key](...args);
	delete context[key];
	return res;
}

Function.prototype.myBind = function (context, ...initArgs) {
	initArgs = initArgs || [];
	const fn = this;
	return function newFn(...args) {
		args = args || [];
		// if(new.target) { // ie不支持new.target
		if (this instanceof newFn) {
			// 作为构造函数调用
			return new fn(...initArgs, ...args);
		}
		// 普通调用，改变this指向
		return fn.call(context, ...initArgs, ...args);
	}
}

/**
 * @description: 测试
 */
const obj = {
	a: 1,
	b: 2
};

function print(...args) {
	this.params = args;
	console.log(this.a);
	console.log(args);
}

print.myCall(obj, 1, 2, 3);
print.myApply(obj, [1, 2, 3]);

function add(...args) {
	console.log(...args);
	return (args || []).reduce((total, item) => total + item, 0);
}

// const fn = add.bind(obj, 1);
const fn = add.myBind(obj, 1);
console.log(fn(2, 3, 4));

const fnInst = new fn(2, 3);
