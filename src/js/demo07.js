"use strict";
//命名空间-在代码量较大情况下，避免命名冲突
//命名空间和模块的区别
// 模块：      ts外部模块的简称，侧重代码的复用，一个模块中可以包含多个命名区间
// 命名空间：   内部模块，主要用于组织代码，避免命名冲突
/*
    A,B中的命名可以冲突
*/
var A;
(function (A) {
    function aa() { } //外部调用需要export
    A.aa = aa;
})(A || (A = {}));
var aaa = A.aa();