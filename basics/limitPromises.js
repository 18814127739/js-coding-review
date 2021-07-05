/**
 * @description: 2、实现一个函数：可以批量请求数据，所有url放在urls参数中，同时可以通过max参数控制请求的并发度
 * 当所有请求结束后，需要执行callback函数，发请求的函数可以直接使用fetch。
 * @param {*}
 * @return {*}
 */

function sendRequest(urls, limit, callback) {
	const fetchArr = [];

	function _send() {
		return fetch(urls.shift()).finally(() => {
			if (urls.length) {
				_send();
			}
		});
	}

	for (let i = 0; i < limit; i++) {
		fetchArr.push(_send());
	}

	return Promise.all(fetchArr).then(callback);
}
