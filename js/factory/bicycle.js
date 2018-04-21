console.log('工厂模式');
// 函数属于 对象
// 函数是一等对象
// 类 简单的只有一个构造函数
// 类和函数没有区别
// js 本身并没有类 只是用的人多了，给了这个实现类。
// js 里面只有对象 object原型对象的使用
// 原型 prototype
// js 不需要传统继承，只要由各参照物就可以实现原型式继承
function Bicycle(brand) {
    // 构造函数 constructor
    // new 时执行
    this.brand = brand || '凤凰'

}
//  prototype 原型对象  
// 多了二维码 手机支付
//  js 这是一个 继承关系，
// 共享单车完全颠覆了自行车，
Bicycle.prototype = {
    sellBicycle: function(model){
        var bicycle = null;
        switch(model) {
            case 'Giant':
             bicycle = new Giant()
            break;
            case 'The Speed Ster':
            bicycle = new Speedster()
            break;
            case 'youto':
            bicycle = new youto()
            break;
        }
        // 把车卖出去
        bicycle.assemble();
        bicycle.wash();
        bicycle.provideRepair();


        return  bicycle;
        // console.log('卖车了...');
        // return null ;
        // 面向对象们 
        // 卖车，商店 很多的车，维修人员 仓库，
    }
}
// js 的基本类型
// 字符串， 数字，布尔值，undefined,null
// 复杂类型 object<- prototype array function json

// 雷素达
function Speedster(){
    

 }
 Speedster.prototype = {
 assemble:function(){
     console.log('组长完成');
 },
 wash:function(){
     console.log('清洗完成');
 },
 provideRepair:function(){
     console.log('保修三年');
 }
 }

 function Giant(){

 }
 Giant.prototype = {
    assemble:function(){
        console.log('组长完成');
    },
    wash:function(){
        console.log('清洗完成');
    },
    provideRepair:function(){
        console.log('保修三年');
    }

 }

 function youto(){

 }
 youto.prototype = {
    assemble:function(){
        console.log('组长完成');
    },
    wash:function(){
        console.log('清洗完成');
    },
    provideRepair:function(){
        console.log('保修三年');
    }

 }


var bicycle = new Bicycle('永久')
console.log(bicycle.sellBicycle('youto'));

