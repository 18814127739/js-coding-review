/**
 * @description: 事件触发器，订阅发布
 */
class EventEmitter {
	constructor() {
		this.fns = {}; // 事件表
		this.oneFns = {}; // 一次性事件表
	}

	/**
	 * @description: 注册事件
	 * @param {*} type 事件类型
	 * @param {*} fn 事件回调
	 */
	add(type, fn) {
		if (!Array.isArray(this.fns[type])) {
			this.fns[type] = [];
		}
		this.fns[type].push(fn);
	}

	/**
	 * @description: 注册一次性事件
	 * @param {*} type 事件类型
	 * @param {*} fn 事件回调
	 */
	addOne(type, fn) {
		if (!Array.isArray(this.oneFns[type])) {
			this.oneFns[type] = [];
		}
		this.oneFns[type].push(fn);
	}

	// 清空某类型事件
	remove(type) {
		delete this.fns[type];
		delete this.oneFns[type];
	}

	/**
	 * @description: 触发事件， 一次性事件触发后需要清空
	 * @param {*} type 事件类型
	 * @param {array} args 业务参数
	 */
	emit(type, ...args) {
		if (this.fns.hasOwnProperty(type)) {
			this.fns[type].forEach(fn => {
				fn(...args);
			});
		}
		if (this.oneFns.hasOwnProperty(type)) {
			this.oneFns[type].forEach(fn => {
				fn(...args);
			})
		}
		delete this.oneFns[type];
	}

	// 清除所有事件
	clear() {
		this.fns = {};
		this.oneFns = {};
	}
}


/**
 * @description: 测试
 */
const emitter = new EventEmitter();

emitter.add('print', (name, age) => {
	console.log(`print: ${name}: ${age}`);
});
emitter.add('print', (name, age) => {
	console.log(`print2: ${age} ${name}`);
});
emitter.add('console', (name, age) => {
	console.log('console', `${name} ${age}`);
});

emitter.addOne('print', (name, age) => {
	console.log(`onePrint: ${name}: ${age}`);
});

emitter.emit('print', 'tjm', 26);
emitter.emit('print', 'tjm', 26);

emitter.remove('print');

emitter.emit('console', 'tjm', 26);

emitter.clear();

emitter.emit('console', 'tjm', 26);
