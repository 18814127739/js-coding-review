/*
 * @Description: 简单的数据存储store
 */
class Store {
	constructor(initState) {
		this.state = initState;
		this.fns = [];
	}

	subscribe(fn) {
		if (this.fns.every(c => c !== fn)) {
			this.fns.push(fn);
		}

		const unSubscrible = () => {
			this.fns = this.fns.filter(c => c !== fn);
		};
		return unSubscrible;
	}

	setState(newState) {
		this.state = newState;
		this.fns.forEach(fn => fn(newState));
	}

	getState() {
		return this.state;
	}
}

const initState = {
	name: 'abc'
};
const store = new Store(initState);

const listener = (newState) => {
	console.log('新状态来了：', newState);
}
const unSubscribe = store.subscribe(listener);

const state = store.getState();
store.setState({ ...state, age: 21 });

unSubscribe();
store.setState({});
console.log(store.getState());



