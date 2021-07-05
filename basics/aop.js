/**
 * @description: 面向切片编程
 * 给一个函数添加前置和后置逻辑
 */

Function.prototype.before = function (callback) {
  return (...ags) => { // 箭头函数，没有自己的this
    const res = callback(...ags);
    // this为原函数本身, 
    this(...ags);
    // 还可以可以把before函数得到的结果传给下一个执行环节
    // this(res, ...ags);
  }
}

Function.prototype.after = function (callbcak) {
  return (...args) => {
    this(...args);
    callbcak(...args);
  }
}

function print(...args) {
  console.log(...args);
}

// 添加前置函数
const printBefore = print.before((a, b) => {
  console.log(a + b);
  return a + b;
});

// 添加后置函数
const printAfter = print.after((a, b) => {
  console.log(a - b);
});

// 添加前置和后置函数
const printBeforeAfter = printBefore.after((a, b) => {
  console.log(a - b);
})

// test
print(1, 2); // 1,2
printBefore(1, 2); // 3  1,2
printAfter(1, 2); // 1,2  -1
printBeforeAfter(1, 2); //  3  1,2  -1
