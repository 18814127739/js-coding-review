/**
 * @description: 深拷贝
 */

function deepCopy(obj) {
	if (typeof obj !== 'object' || !obj) {
		return obj;
	}
	if (['[object Date]', '[object RegExp]'].includes(Object.prototype.toString.call(obj))) {
		// 正则和日期对象无法通过遍历复制
		return obj;
	}
	let newObj = obj instanceof Array ? [] : {};
	// Object.keys(obj).forEach(k => {
	// 	newObj[k] = typeof obj[k] === 'object' ? deepCopy(obj[k]) : obj[k];
	// });
	Object.getOwnPropertyNames(obj).forEach(k => {
		// getOwnPropertyNames 可以获取对象的不可枚举属性，  keys不行
		newObj[k] = typeof obj[k] === 'object' ? deepCopy(obj[k]) : obj[k];
	});
	return newObj;
}

// test
const obj = {
	a: {
		b: 1,
		c: [3, 4]
	},
	b: undefined,
	c: function () {
		console.log('copy');
	},
	d: null,
	e: new RegExp("^abc"),
	f: new Date(),
}
const newObj = deepCopy(obj);
newObj.a.b = 2;
console.log(obj); // { a: { b: 1, c: [ 3, 4 ] }, b: undefined, c: [Function: c], d: null }
console.log(newObj); // { a: { b: 2, c: [ 3, 4 ] }, b: undefined, c: [Function: c], d: null }
