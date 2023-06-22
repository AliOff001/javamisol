// let myString = "salom aloo hello";
// let stringLength = myString.length;
// console.log("Matn uzunligi: " + stringLength);


// function findStringLength(myString) {
//   var stringLength = myString.length;
//   console.log("Matn uzunligi: " + stringLength);
// }


// findStringLength("Bu bir matn");


// function printStringItemLengths(myString) {
//   var items = myString.split(" "); 
//   for (var i = 0; i < items.length; i++) { 
//     console.log("Item #" + (i+1) + " uzunligi: " + items[i].length); 
//   }
// }

// console.log(printStringItemLengths("allo", "hello", "samlomhjdgjdgjsfg"));
// let strings = ["salom","aloo","buxorro"]
// strings.sort(function(a,b){
//   return a.length -b.length
// })
// console.log(strings);
let strings = ["buxorro","good","salom"];
strings.sort(function(a,b){
  if ( a.length < b.length) {
    return -1;
  }
  if ( a.length > b.length) {
    return 1;
  }
  return 0;
   })
   console.log(strings);