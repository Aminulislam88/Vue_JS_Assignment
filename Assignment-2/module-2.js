// Exercise 1:
// Write a function named destructureExample that takes in an object and an array as parameters.The function
// should use destructuring to extract the values 'name' and 'age' from the object and
// the values at index 0 and index 2 from the array. The function should then return an object with the
//     extracted values as properties with name and age.


    function destructureExample(obj,arr){
    const {
        name,age,city
    }=obj
    const[value1,value2,value3,value4]= arr
    return {name,age}
}
const obj={
    name:'AMINUL',
    age:23,
    city:'Dhaka'
}
const arr=[10,20,30,40]
const result=destructureExample(obj,arr)
console.log(result)

// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator.
// The function should return the sum of all the numbers.
function sumNumbers(...num){
    let sum=0
    for (let item=0;item<=num.length; item++){
         sum=sum+item

    }
    return sum
}
const output=sumNumbers(1,2,3,4,5)
console.log(output)

// Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals.
// The message should be in the format: "Hello, [name]! Welcome to our website."
function createGreeting(name){
    return `Hello,${name}! Welcome to our Website`
}
const value=createGreeting('Alice')
console.log(value)

// Write a function named isEven that takes in a number as a parameter and returns the string "Even"
// if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.


function isEven(value){
    let output=value%2==0 ? 'even' : 'odd'
    return output
}
let FinalOutput=isEven(7)
console.log(FinalOutput)

// Convert the following function to an arrow function:
multiply=(a,b)=>{
        return a*b
}
let value=multiply(2,3)
console.log(value)

// Write a function named getLargestNumber that takes in two numbers as parameters.
// The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).
function getGratestNumber(num1,num2){
    return num1 > num2 || num1 === num2 && num1 || num2;
}
let result=getGratestNumber(12,15)
console.log(result)

// Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties
// 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string
// "Unknown" if it doesn't exist, using optional chaining.
function getAddressCity(address) {
    return address?.city ?? "Unknown";
}
const address = { street: '123 Main St', country: 'USA' };
let result=getAddressCity(address)
console.log(result);

// Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.
function doubleFunction(arr){
    let value=arr.map(arr=>arr*2)
    return value
}
let arr=[1,2,3,4,5]
let result=doubleFunction(arr)
console.log(result)
// Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with
// only the even numbers using the array filter method.
function filterEvenNumbers(arr){
    let value= arr.filter(arr=>arr%2===0)
    return value
}
let arr=[1,2,3,4,5]
let result=filterEvenNumbers(arr)
console.log(result)

// Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.
function sumArray(arr){
    let value=arr.reduce((acumulator,currentvalue)=>acumulator+currentvalue)
    return value
}
let arr=[1,2,3,4]
let result=sumArray(arr)
console.log(result)
// Write a function named sortNumbers that takes in an array of numbers and returns a new array with the
// numbers sorted in ascending order using the array sort method.
function sortNumbers(arr){
    let value=arr.slice().sort((a,b)=>a-b)
    return value
}
let arr=[3,5,2,6,8]
let result=sortNumbers(arr)
console.log(result)
