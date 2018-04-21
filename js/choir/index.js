//console.log('合唱团')
// talk is js

// 国王，招1000只鸭组成合唱团
var choir = [];
// duck 是一个对象
// JSON object
// 只要会两脚站立会嘎嘎嘎叫的都是鸭子
var duck = {
    // name: '鸭王',
    // actor: '任达华',
 duckSinging: function(){

    console.log('嘎嘎嘎');
 }

}
// new一下 json 就是对象，不需要new json 可以慢慢描述
// 也是数据交换的标准
var yyj = {
    name: '杨玉杰',
    hasGirlFriend:false,
    girlAttributes:{
        sex:'all',

    }
}
var chicken = {
  duckSinging: function(){
      console.log('嘎嘎嘎');
  }
}
for(var i = 0 ;i<999; i++){
    // choir.push(duck)
    joinChoir(duck);
}
   joinChoir(chicken)
   console.log(choir.length);
//   choir.push(chicken);
  console.log(choir.length);
//   console.log(yyj.girlAttributes.sex);
 
//   for(var i = 0;i < choir.length ;i++){
//       var singer = choir[i];
//       if(!singer.duckSinging) {
//           console.log('不是鸭子');
//           break;
//       }

//   }
  function joinChoir(ani){
     if(ani && typeof ani.duckSinging == 'function')
     {
         choir.push(ani);
     }else {
         console.log('不和要求');
     }

  }