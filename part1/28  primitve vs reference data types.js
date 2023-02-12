// primitve vs reference data types      ---in primitive the data is stored at different palces
// let num1 = 6;                              when we will change the value of one other is not effected
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);


 reference types --in reference the data is stored on basis of address if different data at same address then both are affected
// array 
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);                              //array1 (2) ['item1', 'item2']
console.log("array2", array2);                              ///array2 (2) ['item1', 'item2']
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);                               //array1 (3) ['item1', 'item2', 'item3']
console.log("array2", array2);                              //array2 (3) ['item1', 'item2', 'item3']
