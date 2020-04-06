"use strict";
//泛型-解决 类 接口 方法的复用性，以及对不特定的数据类型的支持
//只能返回 str 类型的数据
/*
    function getDate(value:string):string{
        return value
    }
*/
//同时返回string类型和number类型    
//如果使用 any 则 放弃了类型检查
// 泛型：可以支持不特定的数据类型，传入的参数和返回的参数一致
function getDate(value) {
    return value;
}
getDate(123);
getDate('aaa');
// 泛型类
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass(); //实例化的时候，指定类型
m.add(2);
m.add(4);
m.add(5);
m.add(7);
console.log(m.min());
var setData = function (value1, value2) {
    return value1;
};
setData('a', 'b');
