/*
    装饰器：特殊的一种类型的声明，可以注入到类，属性，方法来进行功能的扩展

    常见的装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器写法：普通装饰器（无法传参）、装饰器工厂（可传参）

*/ 

// 1.类装饰器：类装饰器在类声明前被声明（紧挨着类声明），类装饰器应用于类构造函数，可以用来监视、修改或替换类定义。

function logClass(params:any){
    // 装饰器
    console.log(params)

    params.prototype.apiUrl = 'xxx' //扩展了HttpClient的方法
}

@logClass //普通装饰器
class HttpClient{

    constructor(){

    }

    getData(){}
}

var h = new HttpClient()
console.log(h.apiUrl) //xxx

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
function logProperty(params:any){
    return function(target:any,attr:any){
        console.log(target,attr)
    }
}

@logClass('xx')
class HttpClient{
    @logProperty('url')
    public url:any | undefined;
    constructor(){

    }

}

// 3.方法装饰器，三个参数  类的原型对象，成员名字，属性描述符
// 4.方法参数装饰器     类的原型对象，方法的名称，参数在函数参数列表中的索引


