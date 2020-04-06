"use strict";
/*
    装饰器：特殊的一种类型的声明，可以注入到类，属性，方法来进行功能的扩展

    常见的装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器写法：普通装饰器（无法传参）、装饰器工厂（可传参）

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1.类装饰器：类装饰器在类声明前被声明（紧挨着类声明），类装饰器应用于类构造函数，可以用来监视、修改或替换类定义。
function logClass(params) {
    // 装饰器
    console.log(params);
    params.prototype.apiUrl = 'xxx'; //扩展了HttpClient的方法
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () { };
    HttpClient = __decorate([
        logClass //普通装饰器
    ], HttpClient);
    return HttpClient;
}());
var h = new HttpClient();
console.log(h.apiUrl); //xxx
// 装饰器工厂   
/*
function logClass(params:string){
    return function(target:any){
        console.log(target)
    }
}

@logClass('aa')
*/
// 2.属性装饰器 两个参数 类的原型对象，成员名字
function logProperty(params) {
    return function (target, attr) {
        console.log(target, attr);
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    __decorate([
        logProperty('url')
    ], HttpClient.prototype, "url", void 0);
    HttpClient = __decorate([
        logClass('xx')
    ], HttpClient);
    return HttpClient;
}());
// 3.方法装饰器，三个参数  类的原型对象，成员名字，属性描述符
// 4.方法参数装饰器     类的原型对象，参数的名字，参数在函数参数列表中的索引
