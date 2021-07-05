/**
 * @description: 深拷贝
 */

function deepCopy(obj) {
	if (typeof obj !== 'object' || !obj) {
		return obj;
	}
	let newObj = obj instanceof Array ? [] : {};
	Object.keys(obj).forEach(k => {
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
}
const newObj = deepCopy(obj);
newObj.a.b = 2;
console.log(newObj); // { a: { b: 2, c: [ 3, 4 ] }, b: undefined, c: [Function: c], d: null }
console.log(obj); // { a: { b: 1, c: [ 3, 4 ] }, b: undefined, c: [Function: c], d: null }
newObj.c(); // copy
