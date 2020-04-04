// 增加了类型校验

// 编写ts代码必须制定类型，利于维护

// 布尔类型
let flag:boolean = true
// flag = 213 错误
flag = false //正确

// 数字类型
let num:number = 123
num = 456


// 字符串类型
let str:string = ''
str = 'abc'

// 数组类型(两种方式)

let arr:number[] = [11,22,33]//数组中的元素都是number
let arr_:string[] = ['a','c','v']//数组中的元素都是string
let arr2:Array<number> = [22,33,44]

let curArr:any[] = ['aa',123]

// 元组类型 , 属于数组的一种
let arr3:[number,string] = [123,'12'] //可以给数组中每一个位置制定类型

// 枚举类型(enum)

/*
    enum 枚举名{
        标识符[=整形常数],
        ...
    }
*/

enum Flag {
    success = 1,
    error = 0
}

let s = Flag.success //s = 1

enum Color {
    blue,
    red,
    'orange'
}

let c:Color = Color.red //console.log(c) 1  如果没有复制，则打印出 下标
// 枚举类型的索引会在前一个的基础上+1



// 任意类型（any） 指定any类型后，可以是任意类型的复制

let curNum:any = 123;
curNum = 'sss' //不会报错

let oBox:any = document.getElementById('box')
oBox.style.height = '100px'
oBox.style.width = '100px'
oBox.style.color = 'red'

// null undefined 其他数据类型（never）的子类型

let aa:number;
//console.log(aa) //输出undefined 未设置值直接输出，会报错

let bb:undefined
console.log(bb) //输出undefined 不会报错

let cc:number | undefined
cc = 123 //未赋值 输出undefined 不报错
console.log(cc) //输出123 不报错

let dd:number | null | undefined //可以设置多个类型

// void类型：表示没有任何类型，一般用于定义方法，方法没有任何返回值
function run():void{
    console.log('run')
}//表示方法没有返回任何类型

run()

function run_():number{//该方法返回 数字类型的值
    return 123
}

run_()

// never类型：代表从不会出现的值
let neverType:never
//neverType = 12 报错

neverType = (()=>{
    throw new Error('错误')
})()