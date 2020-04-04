"use strict";
// 增加了类型校验
// 编写ts代码必须制定类型，利于维护
// 布尔类型
var flag = true;
// flag = 213 错误
flag = false; //正确
// 数字类型
var num = 123;
num = 456;
// 字符串类型
var str = '';
str = 'abc';
// 数组类型(两种方式)
var arr = [11, 22, 33]; //数组中的元素都是number
var arr_ = ['a', 'c', 'v']; //数组中的元素都是string
var arr2 = [22, 33, 44];
var curArr = ['aa', 123];
// 元组类型 , 属于数组的一种
var arr3 = [123, '12']; //可以给数组中每一个位置制定类型
// 枚举类型(enum)
/*
    enum 枚举名{
        标识符[=整形常数],
        ...
    }
*/
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
var s = Flag.success; //s = 1
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var c = Color.red; //console.log(c) 1  如果没有复制，则打印出 下标
// 枚举类型的索引会在前一个的基础上+1
// 任意类型（any） 指定any类型后，可以是任意类型的复制
var curNum = 123;
curNum = 'sss'; //不会报错
var oBox = document.getElementById('box');
oBox.style.height = '100px';
oBox.style.width = '100px';
oBox.style.color = 'red';
// null undefined 其他数据类型（never）的子类型
var aa;
//console.log(aa) //输出undefined 未设置值直接输出，会报错
var bb;
console.log(bb); //输出undefined 不会报错
var cc;
cc = 123; //未赋值 输出undefined 不报错
console.log(cc); //输出123 不报错
var dd; //可以设置多个类型
// void类型：表示没有任何类型，一般用于定义方法，方法没有任何返回值
function run() {
    console.log('run');
} //表示方法没有返回任何类型
run();
function run_() {
    return 123;
}
run_();
// never类型：代表从不会出现的值
var neverType;
//neverType = 12 报错
neverType = (function () {
    throw new Error('错误');
})();
