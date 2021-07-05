/**
 * @description: 使用类实现链式调用
 */
class Find {
	constructor(data) {
		this.data = data;
	}

	where(regObj) {
		this.data = this.data.filter(c => {
			let flag = true;
			Object.keys(regObj).forEach(k => {
				if (!c[k] || !regObj[k].test(c[k])) {
					flag = false;
				}
			});
			return flag;
		});
		return this;
	}

	orderBy(...args) {
		(args || []).forEach(c => {
			this.data.sort((a, b) => a[c] - b[c]);
		});
		return this.data;
	}
}

const data = [{
	price: 13,
	name: 'A-apple'
}, {
	price: 9,
	name: 'B-apple'
}, {
	price: 16,
	name: 'A-orange'
}, {
	price: 10,
	name: 'B-orange'
}, {
	price: 20,
	name: null
}];

var result = new Find(data).where({
	'name': /^A/
}).orderBy('price');

console.log(result); // [ { price: 13, name: 'A-apple' }, { price: 16, name: 'A-orange' } ]
