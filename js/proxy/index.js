// 小明的表白的故事
// 小明 talk in js
// js 具有强大的表现力
// js 弱类型语言 java 静态强类型语言
// js 基础类型 字符串 数字，对象{}
// bool 布尔值 null 为空 wndefined symobl
//   六大数据类型  一个复杂类型
var xiaoming = {
 name:'小明',
 age: 21,
 hasGirlFriend:false,
 job:null,
 city:undefined,
//  方法 行为
 sendFlower: function(target){
    //  1 买花
  var flower = new Flower('薰衣草');// 定义类 进行实例化
  if (typeof target.receiverFlower == 'function')
  target.receiverFlower(flower,this.name);
  else 
  console.log('拿到名企前是不可能谈恋爱的。');

 }
 

}
var xueba = {

}
 var xiaomei = {
     name : '小美',
     room:'9栋2201',
     homeTown:'九江',
     age: 18,
     hasBoyFriend:false,
     job:null,
     city:undefined,
     receiverFlower:function(flower,name) {
         console.log('收到'+name+'送的'+flower.type)
        
     },
     /*
      *  功能 ： 提供心情监听 
      *  参数：  fn 类型函数 
      * 在一段时间后心情好了将fn执行
      */
    //  监听好心情
    // fn是js中一个重要形参，是function的简写，可以接受任何形参
    // 是一个函数
     listenGoodMood:function(fn){
         setTimeout(function(){
   fn();
         },10000)
        //  typeof fn === 'function'
        //  fn();

     }
 }
 

//  类大写 对象小写
 var Flower =  function(type){
     this.type = type || '玫瑰'  //   | |提供默认值 玫瑰

 }


var xiaoxue = {
    name: '小雪',
    room: '9栋2201',
    age:20,
    job:null,
    city:undefined,
    receiverFlower:function(flower,name) {
        xiaomei.listenGoodMood(function(){
            xiaomei.receiverFlower(flower,name)
        })
        // if (name== '小明') {
        //     console.log('让我们在一起吧')
        // }else {
       // xiaomei.receiverFlower(flower,name)//代理设计模式
        // 实现了同样的收花方法，接口
        // 小雪 和小美都实现了同样的方法，实现了相同的接口
        // 实现了相同的接口就可以互换对象
       // }
        
    }
}
 xiaoming.sendFlower(xiaoxue);