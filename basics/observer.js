/**
 * @description: 观察者模式
 */

// 被观察者
class Subject {
	constructor() {
		this.state = null; // 被观察者状态
		this.observers = []; // 观察者列表
	}

	attach(observer) {
		this.observers.push(observer);
	}

	setState(newState) {
		this.state = newState;
		// 通知观察者状态发生变化
		this.observers.forEach(o => o.updateState(newState));
	}
}

// 观察者
class Observer {
	constructor(name) {
		this.name = name;
	}

	updateState(newState) {
		console.log(this.name, newState);
	}
}

// test
const subject = new Subject();
const observer1 = new Observer('A: ');
const observer2 = new Observer('B: ');

subject.attach(observer1);
subject.attach(observer2);

subject.setState('hello world');
subject.setState({
	message: 'nice'
});
