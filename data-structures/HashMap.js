/**
 * @description: 散列表(哈希表)
 * 常见的解决hash碰撞的2个办法：
 * 1、分离链接：每一个位置创建一个链表，将元素存储到链表里
 * 2、线性探索：如果索引为position的位置已被占据，则尝试position + 1的位置，以此类推，直到找到空闲的位置
 */

class ValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
}

class HashMap {
	constructor() {
		this.table = {};
	}

	// lose lose散列函数
	loseloseHashCode(key) {
		if (typeof key === 'number') {
			return key;
		}
		// 将传进来的key转换成字符串
		const tableKey = key && key.toString() ? key.toString() : key;
		let hash = 0;
		for (let i = 0; i < tableKey.length; i++) {
			// 相加每个字符对应的 ASCII 值
			hash += tableKey.charCodeAt(i);
		}
		// 取余规避数值过大风险
		return hash % 37;
	}

	// djb2散列函数, 比lose lose更好的散列函数
	djb2HashCode(key) {
		const tableKey = key && key.toString() ? key.toString() : key;
		// 初始化hash变量并赋值为一个质数
		let hash = 5381;
		for (let i = 0; i < tableKey.length; i++) {
			// 乘以一个幻数(33)
			hash = (hash * 33) + tableKey.charCodeAt(i);
		}
		// 最终使用相加的和与另一个随机质数相除的余数
		return hash % 1013;
	}

	hashCode(key) {
		// return this.loseloseHashCode(key);
		return this.djb2HashCode(key);
	}

	put(key, value) {
		if (key != null && value != null) {
			const hash = this.hashCode(key);
			this.table[hash] = new ValuePair(key, value);
			return true;
		}
		return false;
	}

	remove(key) {
		const hash = this.hashCode(key);
		const valuePair = this.table[hash];
		if (valuePair) {
			delete this.table[hash];
			return true;
		}
		return false;
	}

	get(key) {
		const hash = this.hashCode(key);
		const valuePair = this.table[hash];
		return valuePair ? valuePair.value : undefined;
	}

	getTable() {
		return this.table;
	}

	toString() {
		let str = '';
		Object.keys(this.table).forEach(k => {
			str += `${this.table[k].key}: ${this.table[k].value}\n`
		});
		return str;
	}
}


/**
 * @description: test
 */
const hashMap = new HashMap();
hashMap.put('tjm', 25);
hashMap.put('xa', 20);
hashMap.put('lx', 30);
hashMap.put('qq', 28);

console.log(hashMap.get('tjm'));
console.log(hashMap.toString());

console.log('remove: qq');
hashMap.remove('qq');
console.log(hashMap.toString());
console.log(hashMap.getTable());
