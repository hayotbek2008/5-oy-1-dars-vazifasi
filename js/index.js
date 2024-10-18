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


// FUNKSIYA BILAN ISHLANISHI
// Foreach doir misollar
// 1-misol
// function printArrayElements(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(i);

//   }
// }

// console.log([1, 2, 3])



// 2-misol
// function addFiveToElements(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i] + 5);

//   }
// }

// addFiveToElements([1, 2, 3])



// 3-misol
// function num(arg) {
// let oddnumbers = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 1) {
//       oddnumbers.push(arg[i]);
//     }
//   }
//   return oddnumbers;
// }
// let numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//   21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//   31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//   41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
//   51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//   61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
//   71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
//   81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
//   91, 92, 93, 94, 95, 96, 97, 98, 99, 100
// ];

// console.log(num(numbers));

// map doir misollar
// 1-misol
// function num(arg) {
//   let multiplier = [];
//   for (let i = 0; i < arg.length; i++) {
//     multiplier.push(arg[i] * 2)
//   }
//   return multiplier;
// }

// let res = [1, 2, 3, 4, 5];
// let doubledNumbers =num(res)
// console.log(doubledNumbers);


// 2-misol
// function thesquareofthenumber(arg) {
//   let   squaredArray = []
//   for(let i = 0;i<arg.length; i++){
//     squaredArray.push(arg[i]*arg[i])
//   }
//   return squaredArray
// }
// console.log(j=thesquareofthenumber([1,2,3]));

// 3-misol
// function capitalletters(arg) {
//   let letters = []
//   for (let i = 0; i < arg.length; i++) {
//     letters.push(arg[i].toUpperCase())
//   }
//   return letters;
// }
// console.log(capitalletters(['salom', 'dunyo']));

// 5-misol
// function toAdd(arg) {
//   let adding3 = [];
//   for (let i = 0; i < arg.length; i++) {
//     adding3.push(arg[i] + 3)
//   }
//   return adding3;
// }

// console.log(toAdd([1, 2, 3]));




// filter ga doir misollar
// 1-misol
// let evennumbers = [];
// function allEvenNumbers(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 0) {
//       evennumbers.push(arg[i])
//     }
//   }
//   return evennumbers;
// }
// console.log(allEvenNumbers([1, 2, 4, 5, 1, 2, 3, 9]));


// 2-misol
// let positiveNumbers = [];
// function positive(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] > 0) {
//       positiveNumbers.push(arg[i])
//     }
//   }
//   return positiveNumbers
// }

// console.log(positive([-10, -20, -30, 1, 5, 6]));


// 4-misol
// let age = [];
// function Over18YearsOld(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] >= 18) {
//       age.push(arg[i])
//     }
//   }
//   return age;
// }
// console.log(Over18YearsOld([20, 18, 29, 56]));

// 5-misol
// let small = [];
// function lessThanTen(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] <= 10) {
//       small.push(arg[i])
//     }
//   }

//   return small;
// }

// console.log(lessThanTen([10, 20, 0, 40, 50]));


// find doir misollar
// 1-misol
// let big = [];
// function bigThanTen(arg) {
//   for(let i = 0; i< arg.length; i++){
//     if(arg[i]>10){
//       big.push(arg[i])
//     }
//   }
//   return big
// }

// console.log(bigThanTen([10,20,0,40,50,60,70,10]));

// 2-misol
// let positivenumbers = [];
// function positive(arg) {
//  for(let i = 0; i<arg.length; i++) {
//   if(arg[i]>0){
//     positivenumbers.push(arg[i])
//   }
//  }
//  return positivenumbers
// }

// console.log(positive([20,-10,-20,-30]));

// 4-misol
// let evenNumbers = [];
// function anEvenNumber(arg) {
//   for(let i = 0; i<arg.length; i++){
//     if(arg[i]%2==0){
//       evenNumbers.push(arg[i])
//     }
//   }
//   return evenNumbers;
// }
// console.log(anEvenNumber([2,5,6,7,8,9,110]));


// 5-misol
// let isGreaterThan0 = [];
// function big(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] >= 0) {
//       isGreaterThan0.push(arg[i])
//     }
//   }
//   return isGreaterThan0;
// }

// console.log(big([10, 0, 30, 20]));
