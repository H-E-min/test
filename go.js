/*
 * @Description:
 * @Author: hm
 * @Date: 2021-01-26 09:26:12
 * @LastEditTime: 2021-02-01 10:57:56
 * @LastEditors: hm
 * @Reference:
 */
// function* countAppleSales(){
//   // var saleList = [3,7,5]
//   // for(var i = 0,len = saleList.length;i < len;i ++){
//   //   yield saleList[i]
//   // }

//   for(var i = 0;true;i++){
//     var reset = yield i;
//     if(reset){
//       i = -1
//     }
//   }
// }

// console.log('countAppleSales=====',countAppleSales)p

// var Arr = countAppleSales()

// // console.log('Arr===',Arr)
// // console.log('Arr.next(countAppleSales())===',Arr.next())

// console.log('1===',Arr.next())
// console.log('2===',Arr.next())
// console.log('3===',Arr.next())
// console.log('4===',Arr.next())
// console.log('5===',Arr.next())
// console.log('6===',Arr.next())
// console.log('6===',Arr.next())
// console.log('7===',Arr.next(true))

function* sendParameter(){
  console.log("start");
  var x = yield '2';
  console.log("one:" + x);
  var y = yield '3';
  console.log("two:" + y);
  console.log("total:" + (x + y));
}


var test = sendParameter();
console.log(test.next());
// start
// {value: "2", done: false}
console.log(test.next());
// one:undefined
// {value: "3", done: false}
console.log(test.next());
// two:undefined
// total:NaN
// {value: undefined, done: true}


// next传参
var sendp2 = sendParameter();
console.log('传参后，，',sendp2.next(10));
// start
// {value: "2", done: false}
console.log(sendp2.next(20));
// one:20
// {value: "3", done: false}
console.log(sendp2.next(30));
