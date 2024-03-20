// //sorting and reversing
// let a = [4, 2, 7, 1, 9]
// let b = a.sort().reverse()
// console.log(b);


// //sorting and reversing array of string
// let a = ["banana", "apple", "cherry", "date"]
// let b = a.sort().reverse()
// console.log(b);


// //sort array of object in ascending order based on age and reverse
// let a = [
//   { name: "John", age: 25 },
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 20 },
// ];
// let b = a.sort((x,y)=>{
//     return x.age-y.age
// })
// console.log(b.reverse());


// //first number greater than 25
// let a = [10, 20, 30, 40, 50];
// let b = a.find((a)=>{
//     return a>25
// })
// console.log(b);


// // first fruit starting with 'b' 
// let a = ["apple", "banana", "orange", "grape"]
// let b = a.find((x)=>{
//     return x[0]=='b'
// })
// console.log(b);


// // index of the first number divisible by 10
// let a = [15, 25, 35, 45, 55, 80]
// let b = a.findIndex((v)=>{
//     return v%10==0;
// })
// console.log(b);


// //Whether any number is even
// let a = [3, 7, 8, 12, 15]
// let b = a.some((x)=>{
//     return x%2==0;
// })
// console.log(b);


// //Whether all people are above 18 years old 
// let a = [{ name: "John", age: 25 }, { name: "Alice", age: 30 }, { name: "Bob", age: 20 }]
// let b = a.every((x)=>{
//     return x.age>18
// })
// console.log(b);


// //Summation with Reduce:
// let a = [5, 10, 15, 20, 25]
// let b = a.reduce((a,b)=>a+b)
// console.log(b);


// //Concatenation with Reduce
// let a = ["Hello", " ", "world", "!"]
// let b = a.reduce((a,b)=>a+b)
// console.log(b);


// //Flattening Array with Reduce
// let a = [[1, 2], [3, 4], [5, 6]]
// let b = a.reduce((x,y)=>{
//     return x.concat(y)
// })
// console.log(b);
// //explaination
// x                y
// [1,2]          [3,4]
// [1,2,3,4]      [5,6]
// [1,2,3,4,5,6]