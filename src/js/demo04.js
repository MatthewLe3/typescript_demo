"use strict";
/*
    1.es5中的类
    function Person(){
        this.name = '张三';
        this.age = 18
    }

    var p = new Person()

    console.log(p.name)
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    2.构造函数和原型链里面增加方法
    function Person(){
        this.name = '张三';
        this.age = 18;

        this.run = function(){
            console.log(this.name + 'run')
        }
    }

    Person.prototype.sex = '男'
    Person.prototype.work = function(){
        console.log(this.name + '工作')
    }

    var p = new Person()

    p.run()
    p.work()
*/
/*
    3.类里面的静态方法，不需要new 实例化
    Person.getInfo = function(){
        console.log('静态方法')
    }

    Person.getInfo()
*/
/*
    4.es5中的继承
    call(),apply()无法继承原型链上的属性和方法，只能继承构造函数里面的属性和方法
*/
/*
    5.es5中的继承-原型链实现继承
    function web(){}
    web.prototype = new Person() 无法传参
*/
/*
    6.es5中的继承-原型链+构造函数的组合继承
    function Web(name,age){
        Person.call(this,name,age)
    }

    Web.prototype = Person.prototype

    var w = new Web('张三',18)
    w.run()
*/
// 1.ts中的类的地定义
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('张三');
p.run();
console.log(p.getName());
console.log(p.setName('李四'));
console.log(p.getName());
// 2.ts中实现继承 extends super
var Person_ = /** @class */ (function () {
    function Person_(name) {
        this.name = name;
    }
    Person_.prototype.run = function () {
        return this.name + " run";
    };
    return Person_;
}());
var p_ = new Person_('赵二');
console.log(p_.run());
var Web_ = /** @class */ (function (_super) {
    __extends(Web_, _super);
    function Web_(name) {
        return _super.call(this, name) || this;
    }
    Web_.prototype.work = function () {
        console.log(this.name + '子类自己的方法');
    };
    return Web_;
}(Person));
var w_ = new Web_('people');
console.log(w_.run());
w_.work();
// 3.ts类中的修饰符 typescript里面定义属性的时候提供了三种修饰符
// public protected private
/*
    public:     公有类型    在类里面、子类、类外面都可以访问
    protected:  保护类型    在类里面、子类里面都可以访问，在类外面无法访问
    private:    私有类型    在类里面可以访问，子类里面和类外面无法访问


    属性不加修饰符，默认为公有类型

    class Person{
        public name:string;

        constructor(name:string){
            this.name = name
        }

        work():string{
            return this.name
        }
    }

    var p = new Person('aa')
    console.log(p.work())
*/
//  4.ts中 静态属性 静态方法 static关键字
/*
    function Person(){
        this.run1 = function(){ //实例方法 需要实例化对象再调用

        }
    }

    Person.run2 = function(){} 静态方法 直接调用

*/
/*
    class Person {
        public name:string
        constructor(name:string){
            this.name = name
        }

        run(){
            console.log(`${this.name}在run`)
        }

        work(){
            console.log(`${this.name}在work`)
        }

        static print(){         静态方法 无法直接调用类中的属性，将属性改为静态属性则可调用
            console.log('print')
        }
    }
*/
// 5.ts中的多态 父类定义一个方法不去实现，由继承他的子类去实现，每一个子类具有不同的表现
//  多态属于继承
/*
    class Animal {

        name:string;

        constructor(name:string){
            this.name = name
        }

        eat(){
            console.log('eat')
        }
    }

    class Dog extends Animal{
        constructor(name:string){
            super(name)
        }

        eat(){
            return this.name + '肉'
        }
    }

    class Cat extends Animal{
        constructor(name:string){
            super(name)
        }

        eat(){
            return this.name + '鱼'
        }
    }
*/
// 6.抽象方法 抽象类 提供其他类继承的基类，不能直接被实例化
// abstract 关键字定义的抽象类和抽象方法，只能放在抽象类里面，不包含具体实现并且必须在派生类中实现
/*
    子类中必须包含该抽象方法，如 Dog 和 Cat 中必须包含 eat()

    abstract class Animal{
        public name:string

        constructor(name:string){
            this.name = name
        }

        abstract eat():any;
    }

    var a = new Animal()  错误

    class Dog extends Animal{

        constructor(name:string){
            super(name)
        }

        eat(){
            console.log(this.name + '肉')
        }
    }

    var d = new Dog('狗')
    d.eat()
*/
