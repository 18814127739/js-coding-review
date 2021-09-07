/**
 * @description: 函数防抖
 * 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计时
 * 每次触发时间时都取消之前的延时调用方法
 */
function debounce(fn, delay = 500) {
	let timer = null;

	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.call(this, ...args);
		}, delay);
	}
}

/**
 * @description: 函数节流
 * 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
 * 每次触发事件时都判断当前是否右等待执行的延时函数
 */
function throttle(fn, delay = 500) {
	let canRun = true;

	return function (...args) {
		if (!canRun) {
			return;
		}
		canRun = false;
		setTimeout(() => {
			canRun = true;
			fn.call(this, ...args);
		}, delay);
	}
}
