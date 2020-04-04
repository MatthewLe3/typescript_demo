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

function demo():string{
    return 'string'
}

// 匿名函数法

let run2 = function():number{
    return 222
}

// ts中定义方法传参
function getInfo(name:string,age:number):string{
    return `${name}:${age}`
}

console.log(getInfo('tt',18))


// 可选参数 ?的用法

function getInfo_(name:string,age?:number):string{//可选参数必须配置到必须参数的后面
    if(age){
        return `${name}:${age}`
    }else{
        return `${name}:年龄保密`
    }
    
}

console.log(getInfo_('tta',18))
console.log(getInfo_('ttb'))

// 默认参数
function defaultFun(name:string='noone',age?:number):string{
    if(age){
        return `${name}:${age}`
    }else{
        return `${name}:年龄保密`
    }
    
}

console.log(defaultFun())

// 剩余参数 ...
function sum(a:number,...arg:number[]):number{
    let sum:number = a
    arg.map((value,index)=>{
        sum += value
    })
    return sum
}

console.log(sum(1,2,3,4))


// 函数的重载   通过为同一个函数提供多个函数类型定义来实现多种功能的目的
function reGet(name:string):string;//不要写函数体

function reGet(age:number):number;

function reGet(str:any):any{
    if(typeof str == 'string'){
        return 'name'
    }else{
        return 100
    }
}

console.log(reGet('name'))
console.log(reGet(18))


// 箭头函数
let vv = ():string=>{
    return 'aa'
}


