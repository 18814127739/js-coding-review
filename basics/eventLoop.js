/**
 * @description: js执行机制
 */

const async2 = async () => {
	console.log('async2'); // 宏任务3
};

const async1 = async () => {
	console.log('async1'); // 宏任务2
	await async2();
	console.log('async1 end'); // 第一轮微任务1
};

const start = () => {
	console.log('script start'); // 宏任务1
	async1();
	setTimeout(() => {
		console.log('time out'); // 异步结束后, setTimeout的回调函数提取到宏任务中, 在第二轮宏任务中执行
	}, 0);
	new Promise((resolve) => {
		console.log('promise'); // 宏任务4
		resolve();
	}).then(() => {
		console.log('promise end'); // 第一轮微任务2
	});
	console.log('script end'); // 第一轮宏任务5,  第一轮宏任务结束
};

start();

// script start
// async1
// async2
// promise
// script end
// async1 end
// promise end
// time out
