// var o = {};
// o.step = 1;
// var bValue =1;
// Object.defineProperty(o,'a',{
//     get:function(){
//         console.log('get');
//         return bValue;       
//     } ,
//     set:function(val){
//         console.log('设置了新的值');
        
//         bValue = val;
//     }   
// });
// o.a = 2;
// console.log(o.a);
// (function(){
//     'use strict';
//     var o = {};

//     Object.defineProperty(o,'a', {
//         value:7,
//         writable:false  
//     });
    
//     console.log(o.a);
//     // o.a = 25;
//     console.log(o.a);
    
// })();

// var o = {};
// Object.defineProperty(o,'a',{
//     value:1,
//     enumerable:true
// });
// Object.defineProperty(o,'b',{
//     value:2,
//     enumerable:false
// });
// Object.defineProperty(o,'c',{
//     value:3,
//     enumerable:true
// });

// o.d = 4;

// console.log(Object.keys(o));

// for(let key in o) {
//     console.log(key, o[key]);
// }
// console.log(o.b);
// console.log(o.c);
// console.log(o.propertyIsEnumerable('d'));
var o = {};
Object.defineProperty(o, 'a',{
    configurable:false,
    get:function() {
        return 1;
    }
});
console.log(o.a);
delete o.a;
console.log(o.a);



