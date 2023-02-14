// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let index in fruits){
    console.log(index);                                    //0,1,2,3,4
    console.log(fruits[index]);                           //apple, mango, grapes, fruit4, fruit5
    fruits2.push(fruits[index]);
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);                                       //(10) ['apple', 'APPLE', 'mango', 'MANGO',
                                                       //          'grapes', 'GRAPES', 'fruit4', 'FRUIT4', 'fruit5', 'FRUIT5']
