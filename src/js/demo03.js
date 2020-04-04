"use strict";
// 定义函数
// 函数声明法
// function run(){
//     return 'run'
// }
// 匿名函数
// var run2 = function(){
//     return 'run2'
// }
// ts中定义函数
// 函数声明法
function demo() {
    return 'string';
}
// 匿名函数法
var run2 = function () {
    return 222;
};
// ts中定义方法传参
function getInfo(name, age) {
    return name + ":" + age;
}
console.log(getInfo('tt', 18));
// 可选参数 ?的用法
function getInfo_(name, age) {
    if (age) {
        return name + ":" + age;
    }
    else {
        return name + ":\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getInfo_('tta', 18));
console.log(getInfo_('ttb'));
// 默认参数
function defaultFun(name, age) {
    if (name === void 0) { name = 'noone'; }
    if (age) {
        return name + ":" + age;
    }
    else {
        return name + ":\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(defaultFun());
// 剩余参数 ...
function sum(a) {
    var arg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg[_i - 1] = arguments[_i];
    }
    var sum = a;
    arg.map(function (value, index) {
        sum += value;
    });
    return sum;
}
console.log(sum(1, 2, 3, 4));
function reGet(str) {
    if (typeof str == 'string') {
        return 'name';
    }
    else {
        return 100;
    }
}
console.log(reGet('name'));
console.log(reGet(18));
// 箭头函数
var vv = function () {
    return 'aa';
};
