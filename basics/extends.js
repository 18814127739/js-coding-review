/**
 * @description: js 继承方式
 */

// 父类
function Parent(name) { // 给构造函数添加参数
	this.name = name;
	this.print = function () {
		console.log(this.name);
	}
}
Parent.prototype.age = 30; // 给构造函数添加原型属性

/**
 * 1、原型链继承
 * @description:
 * 重点：让新实例的原型等于父类的实例。
 * 特点：1、实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）
 * 缺点：1、新实例无法向父类构造函数传参。
 *　　　 2、继承单一, 不能继承多个父类
 *　　　 3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）
 */
function Child1() {
	this.name = 'tom';
}
Child1.prototype = new Parent(); // 主要, 重写了子类的原型
Child1.prototype.constructor = Child1; // 一定要把子类原型上的contructor重新指向子类

const child1 = new Child1();
console.log(child1.age); // 30
// instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上
console.log(child1 instanceof Parent); // true

/**
 * 2、构造函数继承
 * @description:
 * 重点：用.call()和.apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））
 * 特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性。
 *      2、解决了原型链继承缺点1、2、3。
 *　　　 3、可以继承多个构造函数属性（call多个）。
 *      4、在子实例中可向父实例传参。
 * 缺点：1、只能继承父类构造函数的属性。
 *      2、无法实现构造函数的复用。（每次用每次都要重新调用）
 *      3、每个新实例都有父类构造函数的副本，臃肿。
 */
function Child2() {
	Parent.call(this, 'jack'); // 重点
}

const child2 = new Child2();
console.log(child2.name) // jack
console.log(child2.age) // undefined
console.log(child2 instanceof Parent); // false

/**
 * 3、组合继承
 * @description:
 * 重点：结合了两种模式的优点，传参和复用
 * 特点：1、可以继承父类原型上的属性，可以传参，可复用。
 *      2、每个新实例引入的构造函数属性是私有的。
 * 缺点：调用了两次父类构造函数,生成了两份实例（耗内存），子类的构造函数会代替原型上的那个父类构造函数。
 */
function Child3(name) {
	Parent.call(this, name); // 构造函数继承
}
Child3.prototype = new Parent(); // 原型链继承
Child3.prototype.constructor = Child3;

const child3 = new Child3('rose');
console.log(child3.name); // rose
console.log(child3.age); // 30
console.log(child3 instanceof Parent); // true

/**
 * 4、寄生组合继承
 * @description:
 * 寄生：在函数内返回对象然后调用
 * 组合：1、函数的原型等于另一个实例。2、在函数中用apply或者call引入另一个构造函数，可传参　
 * 重点：通过寄生方式，去掉父类的实例属性，这样，在调用两次构造函数的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
 */
// 寄生
function createObj(parentPrototype) {
	function Fn() { }
	Fn.prototype = parentPrototype; // 继承了传入的参数
	// 返回的实例的原型继承了父类的原型属性
	return new Fn(); // 返回函数实例
}
// 组合
function Child4(name) {
	Parent.call(this, name); // 继承父类构造函数的属性
} // 解决了两次调用父类构造函数的缺点
Child4.prototype = createObj(Parent.prototype); // 继承了con实例
Child4.prototype.constructor = Child4; // 修复实例

const child4 = new Child4('lance');
console.log(child4.name); // lance
console.log(child4.age); // 30
console.log(child4 instanceof Parent); // true
