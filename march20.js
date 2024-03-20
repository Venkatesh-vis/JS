// //sort method (sorts array in ascending order)
// arr = [5,1,9,6,7,6]
// arr1 = arr.sort()
// console.log(arr1);
// arr2 = arr.reverse()
// console.log(arr2);

// //sort for two digit or more numbers
// const a = [11,5,36,89,101,26,78]
// const b = a.sort((a,b)=>a-b) //ascending order
// console.log(b);
// const c = a.sort((a,b)=>b-a) //descending order
// console.log(c);


// //reverse method (reverses array)
// //let a = [1,8,6,3,7,2,9]
// let a = ["hello","world","welcome","bye"]
// let b = a.reverse()
// console.log(b);


//find (checks condition and print first value satisfying condition, if no match prints undefined)
// let a = [1,9,8,68,25,36,67,38]
// let b = a.find((v)=>{
//     return v>18
// })
// console.log(b);


//findIndex (checks condition and return first index where condition is satisfed, if no match prints -1)
// let a = [1,9,6,7,25,57,13,390]
// let b = a.findIndex((x)=>{
//     return x>50
// })
// console.log(b);

//some method (checks condition and prints true if there is atleast 1 value matching conditon / return false if nothing is true)
// let a = [1,9,6,45,6,2,36,58,69]
// let b = a.some((i)=>{
//     return i>20
// })
// console.log(b);


//every () (checks condition and return false even if one is false/ return true if all are true)
// //let a = [20,30,65,78,40,65,97,36]
// let a = [2,30,65,78,40,65,97,36]
// let b = a.every((v)=>{
//     return v>18
// })
// console.log(b);


//reduce (return accumulated result, takes 2 parameters accumulator and next value)
// let a = [10,20,30,40,50]             
// let b = a.reduce((v,e)=>{
//     return v+e
// })
// console.log(b);
// //explanation reduce
// // v   e
// // 10  20  //30
// // 30  30  //60
// // 60  40  //100
// // 100 50  //150
// // 150     // return v(accumulator)