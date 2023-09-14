// 1. 格式化货币
// 123456789 => 123,456,789
// 123456789.123 => 123,456,789.123
const formatMoney = (money) => { return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'), ',') }
formatMoney('123456789') // '123,456,789'
formatMoney('123456789.123') // '123,456,789.123'
formatMoney('123') // '123'


// 2.解析链接上的搜索参数
const getQueryByName = (name) => {
  const queryNameRegex = new RegExp(`[?&]${name}=([^&]*)(&|$)`);
  const queryNameMatch = window.location.search.match(queryNameRegex);
};
// https://qianlongo.github.io/vue-demos/dist/index.html?name=fatfish&age=100
const name = getQueryByName('name')
const age = getQueryByName('age')
console.log(name, age) // fatfish, 100

// 3. 驼峰式命名字符串
// foo Bar => fooBar
// foo-bar---- => fooBar
// foo_bar__ => fooBar
const camelCase = (string) => {
  const camelCaseRegex = /[-_\s]+(.)?/g;
  return string.replace(camelCaseRegex, (match, char) => {
    return char ? char.toUpperCase() : ''
  });
}
console.log(camelCase('foo Bar')) // fooBarconsole.log(camelCase('foo-bar--')) // fooBar
console.log(camelCase('foo_bar__')) // fooBar

// 4. 将字符串的第一个字母转换为大写
// 将 hello world 转换为 Hello World
const capitalize = (string) => {
  const capitalizeRegex = /(?:^|\s+)\w/g;
  return string.toLowerCase().replace(capitalizeRegex, (match) => match.toUpperCase());
}
console.log(capitalize('hello world')) // Hello World
console.log(capitalize('hello WORLD')) // Hello World

// 5. 转义 HTML
// 防止 XSS 攻击的方法之一是进行 HTML 转义
const escape = (string) => {
  const escapeMaps = {
    '&': 'amp',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    "'": '#39'
  };  // The effect here is the same as that of /[&amp;<> "']/g  
  const escapeRegexp = new RegExp(`[${Object.keys(escapeMaps).join('')}]`, 'g');
  return string.replace(escapeRegexp, (match) => `&${escapeMaps[match]};`);
}
console.log(escape(`  <div>    <p>hello world</p>  </div>`))/*&lt;div&gt;  &lt;p&gt;hello world&lt;/p&gt;&lt;/div&gt;*/

// 6. 取消转义 HTML
const unescape = (string) => {
  const unescapeMaps = {
    'amp': '&',
    'lt': '<',
    'gt': '>',
    'quot': '"',
    '#39': "'"
  };
  const unescapeRegexp = /&([^;]+);/g;
  return string.replace(unescapeRegexp, (match, unescapeKey) => { return unescapeMaps[unescapeKey] || match });
}
console.log(unescape(`  &lt;div&gt;    &lt;p&gt;hello world&lt;/p&gt;  &lt;/div&gt;`))/*<div>  <p>hello world</p></div>*/

// 7.匹配日期格式
// 匹配日期格式，例如（yyyy-mm-dd、yyyy.mm.dd、yyyy/mm/dd），例如 2021–08–22、2021.08.22、2021/08/22
const checkDateRegexp = /^\d{4}([-\.\/])(?:0[1-9]|1[0-2])\1(?:0[1-9]|[12]\d|3[01])$/;
console.log(checkDateRegexp.test('2021-08-22')) // true
console.log(checkDateRegexp.test('2021/08/22')) // true
console.log(checkDateRegexp.test('2021.08.22')) // true
console.log(checkDateRegexp.test('2021.08/22')) // false
console.log(checkDateRegexp.test('2021/08-22')) // false

// 8. 匹配十六进制颜色值
const matchColorRegex = /#(?:[\da-fA-F]{6}|[\da-fA-F]{3})/g;
const colorString = '#12f3a1 #ffBabd #FFF #123 #586';
console.log(colorString.match(matchColorRegex))// [ '#12f3a1', '#ffBabd', '#FFF', '#123', '#586' ]

// 9. 请检查版本号是否正确
// 版本号必须采用 x.y.z 格式，其中 XYZ 至少为一位数字。
// x.y.z
const versionRegexp = /^(?:\d+\.){2}\d+$/;
console.log(versionRegexp.test('1.1.1')); // true
console.log(versionRegexp.test('1.000.1')); // true
console.log(versionRegexp.test('1.000.1.1')); // false

// 10. 获取网页上所有img标签的图片地址
const matchImgs = (sHtml) => {
  const imgUrlRegex = /<img[^>]+src="((?:https?:)?\/\/[^"]+)"[^>]*?>/gi;
  let matchImgUrls = [];
  sHtml.replace(imgUrlRegex, (match, $1) => { $1 && matchImgUrls.push($1) });
  return matchImgUrls;
}
console.log(matchImgs(document.body.innerHTML));

// 11. 按照3-4-4格式划分电话号码
let mobile = '13312345678';
let mobileReg = /(?=(\d{4})+$)/g
console.log(mobile.replace(mobileReg, '-')); // 133-1234-5678