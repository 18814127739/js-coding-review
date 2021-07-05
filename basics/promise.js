/**
 * @description: Promise
 */
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {
    this.state = PENDING; // 状态
    this.value; // 成功的值
    this.reason; // 失败的原因
    this.onFulfilledCallbacks = []; // 成功的回调数组
    this.onRejectedCallbacks = []; // 失败的回调数组

    const resolve = (value) => {
      if (this.state === PENDING) {
        if (value instanceof Promise) { // 如果首个promise resolve的是一个promise，需要调用解决过程, 且传入的应该是首次处理结果的逻辑
          resolvePromise(this, value, (value) => {
            this.state = FULFILLED;
            this.value = value;
            this.onFulfilledCallbacks.forEach(fn => fn());
          }, (reason) => {
            this.state = REJECTED;
            this.reason = reason;
            this.onRejectedCallbacks.forEach(fn => fn()); // 发布
          });
        } else {
          this.state = FULFILLED;
          this.value = value;
          this.onFulfilledCallbacks.forEach(fn => fn());
        }
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn()); // 发布
      }
    }

    try {
      executor(resolve, reject); // 立即执行
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (e) => {
      throw e
    };
    const promise2 = new Promise((resolve, reject) => {
      // executor中同步调用 resolve
      if (this.state === FULFILLED) {
        // resolvePromise 函数需要传入 promise2 和 x
        // 在 promise2 的 executor 执行期间，resolvePromise 还获取不到 promise2 的值，所以需要 setTimeout 来延迟执行, 保证 promise2 已经new完
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            // x 可能是普通值， 也可能是 promise
            // 判断 x 的值 => 更改 promise2 的状态
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) { // 若 promise 的 then 中的 onFulfilled 回调抛出异常，则 promise2 直接 reject
            reject(e);
          }
        });
      }
			// executor中同步调用 reject
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      // executor中异步调用 resolve / reject
      if (this.state === PENDING) {
        this.onFulfilledCallbacks.push(() => { // 订阅
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectedCallbacks.push(() => { // 订阅
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });
    return promise2;
  }
}

/**
 * @description: promise的解决过程函数
 * @param {type}
 * promise2: promise1 的 then中返回的promise实例
 * x: promise1 的 then 中 onFulfilled 回调函数返回的值
 * resolve: promise2 的 resolve
 * reject: promise2 的 reject
 */
 const resolvePromise = (promise2, x, resolve, reject) => {
  // 判断x
  if (promise2 === x) {
    reject(new TypeError('Chaining cycle detected for promise'));
  }
  // 判断 x 的类型是否为对象或者函数而且不为null
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    let called; // 内部测试时，成功和失败都会调用
    try {
      const then = x.then;
      if (typeof then === 'function') { // 该对象有 then 方法，可能是一个 promise
        // 这里是用 then.call 不使用 x.then 是因为执行 x.then 需要重新取值， 有可能会抛错， 使用 then.call 的话 then 是前面已经成功取出来的函数
        then.call(x, (y) => { // y 可能还是一个promise，直到解析出来的结果是一个普通值为止
          if (called) {
            return;
          }
          called = true; // 防止多次调用成功和失败
          resolvePromise(promise2, y, resolve, reject); // 采用promsie的成功向下传递
        }, (r) => {
          if (called) {
            return;
          }
          called = true;
          reject(r); // 采用失败结果向下传递
        });
      } else {
        // x 是一个普通对象， 并非 promise
        resolve(x);
      }
    } catch (e) {
      // 极端情况 promise 失败了有可能还会调用resolve
      if (called) {
        return;
      }
      called = true;
      // 若 then 属性是通过 defineProperty 定义的，有可能在 get() 中抛出
      reject(e);
    }
  } else {
    // x是一个普通值, 直接让 promise2 成功
    resolve(x);
  }
}

Promise.defer = Promise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}

// promises-aplus-tests promise.js

module.exports = Promise;
