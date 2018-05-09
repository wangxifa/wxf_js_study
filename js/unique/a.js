const arr = [1, 2, 3, 4, 1, 4, 5, 3];
Array.prototype.unique = function(){
    var res = [];
    var json = {};
    for(var i = 0; i < this.length; i++){
     if(!json[this[i]]){
      res.push(this[i]);
      json[this[i]] = 1;
     }
    }
    return res;
   }
   console.log(arr.unique());
// function unique(arr){
//     // 严谨性
//     if(!Array.isArray(arr)){
//         console.log('type error');
//         return ;
        
//     }
//     // 准备一个空数组，结果数组，没有重复的元素的
//     const resultArr = [arr[0]];
//     for (let i =1;i<arr.length;i++){
//         // arr[i]
//         let flag = true;
//         for(let j=0;j<resultArr.length;j++){
//             if(arr[i] === resultArr[j]) {
//                 flag = false;
//                 break;
//                 }
//             }if(flag){

//                 resultArr.push(arr[i]);
            
//             }
//         }            
//     return resultArr;
// }
// console.log(unique(arr));
