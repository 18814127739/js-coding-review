### js模块化发展历程

1. `<script src="moduleA.js"></script>`：通过script标签导入其他js文件，容易污染全局作用域；没有私有控件；无法管理模块与模块之间的依赖关系；容易产生命名冲突

2. <font color="red">立即执行函数表达式(IIFE)</font>：模块具有私有空间，对于需要暴露给外部的成员，通过挂在全局对象上实现
   ```js
   (function($) {
      function hello() {
        console.log('hello');
      }
      window.module1 = { hello };
   })(jquery)
   ```

3. <font color="red">显式模块声明</font>：IIFE的进化版，将立即执行函数中的返回值分配给一个变量。
    ```js
    var module1 = function() {
      function hello() {}
      return { hello };
    }();
    ```

4. <font color="red">异步模块定义(AMD)</font>：早期的浏览器端js模块化规范，requireJS就是遵循AMD实现的第三方库，通过define函数来定义模块和声明依赖。
    ```js
    define(['jqeury', './module2.js'], function($, module2) => {
      return {
        hello: function() {}
      }
    );
    ```
    define函数会异步加载所依赖的模块，所有依赖加载完成后再执行模块内声明的函数。但如果依赖的模块需要有先后加载顺序，需要额外在requieJS的配置文件中进行依赖声明。
    
5. <font color="red">共同模块定义(CMD)</font>：sea.js，支持浏览器端和node.js。在定义模块时会给声明函数注入`require`、`exports`和`module` 3个参数
    ```js
    define('myModule', function(require, exports, module) {
      var a = require('moduleA'); // 同步加载
      exports.pa = a.xxx;
      var b = require.async(['moduleB'], function(b) {
        exports.pb = b.xxx;
      }); // 异步加载
    });
    ```

6. <font color="red">通用模块定义(UMD)</font>：先判断是否支持AMD，再判断是否支持CommonJS。

7. <font color="red">CommonJS</font>：专注于nodejs的模块化规范，规定一个文件就是一个模块。通过exports对象导出当前模块的信息。另外还存在module对象，代表模块本身，exports是module的属性。

8. <font color="red">ESmodule</font>：es6中定义的模块系统，规定每个文件就是一个模块。使用import和export关键字进行模块导入和导出。
