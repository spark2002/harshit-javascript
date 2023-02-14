// use const for creating array

 // heap memory ["apple", "mango"]      //0x11

 const fruits = ["apple", "mango"]; // 0x11
 fruits.push("banana");                            //(3) ['apple', 'mango', 'banana']     
 console.log(fruits);
 fruits.pop();
 console.log(fruits);                               //(2) ['apple', 'mango']
 fruits.unshift("grapes","pickle);
 console.log(fruits);                               //(4) ['grapes', 'pickle', 'apple', 'mango']
 fruits.shift();
 console.log(fruits);                               //(3) ['pickle', 'apple', 'mango']

//push--add
//pop--remove
//unshift--add
//shift--remove
