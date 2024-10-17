// Foreach doir misollar
// 1-misol
// let arr = [1,2,3,4,5,6,7,8,9,10];
//   arr.forEach(function(value){
//     console.log(value);

//   })

// 2-misol
// let arr = [5,10,2,3,4,5,2];
// arr.forEach(function(value){
//   console.log(value+5);

// })

// 3-misol
// let arr = [10, 20, 21, 29, 34, 23, 13, 12];
// arr.forEach(function (value) {
//   if (value % 2 == 1) {
//     console.log(value);

//   }

// })
// 4-misol
// let arr = [20, 90, 100, 238, 2938]
// let count = 0;
// arr.forEach(function (value) {
//   count++
// })
// console.log(count);


// map doir misollar
// 1-misol
// let arr = [2, 3, 4, 50, 10]
// let res = arr.map(function (value, index, a) {
//   return value * 2;
// });
// console.log(res);


// 2-misol
// let arr = [2, 4, 5, 10];
// let res = arr.map(function (value) {
//   return value * value;
// })
// console.log(res);


// 3-misol
// let arr = ['hello', 'world']
// let res = arr.map(function (value) {
//   return value.toUpperCase()
// })

// console.log(res);

// 5-misol
// let arr = [2, 5, 10, 90, 10]
// let res = arr.map(function (value) {
//   return value + 3
// })
// console.log(res);


// filter doir misollar
// 1-misol
// let arr = [2, -1, 10, 2, 4, 5, 7, 5, 1, 10];
// let evenNumbers = arr.filter(function (value) {
//   return value % 2 == 0
// })

// console.log(evenNumbers);

// 2-misol
// let arr = [1, -10, -20, 2, 90]
// let positivenumbers = arr.filter(function (value) {
//   return value > 0
// })
// console.log(positivenumbers);


// 4-misol
// let arr = [18, 20, 70, 21, 6, 7, 8, 9, 10]
// let Over18yearsold = arr.filter(function (value) {
//   return value >= 18
// })
// console.log(Over18yearsold);


// 5-misol
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let lessthan10 = arr.filter(function (value) {
//   return value < 10
// })
// console.log(lessthan10);

// find doir misollar
// 1-misol
// let arr = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14]
// let greaterthan10 = arr.filter(function (value) {
//   return value >= 10
// })
// console.log(greaterthan10);

// 2-misol
// let arr = [10, 20, 40, -10]
// let res = arr.find(function (value) {
//   return value > 0;
// })
// console.log(res);


// 4-misol
// let arr = [1, 2, 3, 4, 5];
// let evennumbers = arr.filter(function (value) {
//   return value % 2 == 0
// })
// console.log(evennumbers);

// 5-misol
// let arr = [-5, 0, 3, -2, 8, 10, -1, 5];
// let res = arr.filter(function (value) {
//   return value >= 0
// })
// console.log(res);


// some/every doir misollar
// some` metodiga oid masalalar
// 1-misol
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let hasNegative = arr.some(function (value) {
//   return value < 0;
// })
// console.log(hasNegative);

// 2-misol
// let arr = [1, 3, 5, 7, 8]
// let hasEvenNumber = arr.some(function (value) {
//   return value % 2 == 0
// })
// console.log(hasEvenNumber);



// 3-misol
// let str = ['apple', 'banana']
// let res = str.some(function (fruit) {
//   return fruit === 'apple'
// })

// console.log(res);

// every` metodiga oid masalalar
// 4-misol
// let arg = [1, 3, 4];
// let allPositive = arg.every(function (value) {
//   return value > 0
// })
// console.log(allPositive);

// 6-misol
// let numbers = [10, 30, 50]
// let allLessThan100 = numbers.every(function (value) {
//   return value < 100
// })
// console.log(allLessThan100);

