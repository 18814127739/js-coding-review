// AbortController 终止fetch请求
let controller1 = new AbortController();
const a = fetch('https://cbg.res.netease.com/cbg/product-origin.js', { signal: controller1.signal }).then(res => {
	console.log(res);
}).catch(e => {
	console.log(e);
});
controller1.abort();

// 封装fetch支持abort方法终止请求
let originFetch = window.fetch;
window.fetch = (req, opts) => {
	// 给每个fetch请求添加signal， 在返回的promise实例中添加abort方法
	const controller = new AbortController();
	const instance = originFetch(req, { ...opts, signal: controller.signal });
	instance.abort = () => {
		controller.abort()
	};
	return instance;
};

const req1 = fetch('https://cbg.res.netease.com/cbg/app.js');
const req2 = fetch('https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city=', {
	headers: {
		"content-type": "application/json"
	}
});

req1.then(res => {
	console.log(res);
}).catch(e => {
	console.log(e);
});

req2.then(res => res.json()).then(data => {
	console.log(data);
}).catch(e => {
	console.log(e);
});

if (req1) {
	// 只会终止req1，不会影响req2
	req1.abort();
}
// if (req2) {
// 	req2.abort();
// }

