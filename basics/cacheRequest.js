/**
 * @description: 缓存业务请求promise
 * @return {*}
 */

let reqCache = null;

// 底层封装请求
const ajax = (...args) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(args);
		}, 1000);
	});
};

// 缓存请求
const cacheReq = (...args) => {
	if (!reqCache) {
		reqCache = ajax(...args);
	}
	return reqCache;
};

// 业务请求
const req = cacheReq('a', 'b', 'c');
req.then((args) => console.log(args));
