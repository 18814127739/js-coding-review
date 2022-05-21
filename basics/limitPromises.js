/**
 * @description: 2、实现一个函数：可以批量请求数据，所有url放在urls参数中，同时可以通过max参数控制请求的并发度
 * 当所有请求结束后，需要执行callback函数，发请求的函数可以直接使用fetch。
 * @param {*}
 * @return {*}
 */

function limitPromise(arr, num) {
	const pmsList = [];
	let resolve;
	const promise = new Promise((r) => {
		resolve = r;
	});

	const run = () => {
		return new Promise(r => {
			setTimeout(() => {
				const num = arr.shift();
				console.log(num);
				r();
			}, 500);
		}).finally(() => {
			if (arr.length) {
				run();
			} else {
				resolve('finish');
			}
		});
	}

	for (let i = 0; i < num; i++) {
		pmsList.push(run());
	}

	return promise;
}

const arr = new Array(22).fill(i => i).map((c, i) => i);
const res = limitPromise(arr, 5).then(res => console.log(res));

