// //console.log("Hello Sarita");

// //to define variable : var let const, js is dynamic and interpreted language
// //var and let changable overtime ,so we can reassigned i.e, mutable
// var a = 10 
// var a = "hello" // var can be used for both 10 and hello so it creates confusion 
// a= 88

// let b = 19
// //let b ="hello" -> Cannot redeclare block-scoped variable 'b'.
// b= 100
// console.log(a,b)

// const c = 45 //const not changable

// console.log(c)

// // data types
// //! string
// let d= 'hello'
// let e="hello"
// let f= `${d} world`
// //console.log(f)

// //! number
// let g= 28
// let h= 9852

// //! boolean
// let i= true
// let j= false

// //! undefined
// let k; //declare can be done in let and var but not const i.e, const d; is not allowed
// console.log(k) //when we do not assigned a value to a variable js done it internally

// //! null
// let l= null //empty initialization

// //6/1/25
// // OPERATORS
// // arithmetic (+, -, /, *, %, **)
// console.log(9+10)
// console.log(2+'2')
// console.log('Hello'+'World')

// //assignment( =, +=, -+,..)
// let m= 20
// m+=10 // m= m+10

// //comparision ( ==, === , <, >, <=, >=, !=, !===)
// //let x= 10 //checks value
// //let y= '10' //checks value and datatype 
// // console.log(x==y)
// //console.log(x===y)



// // logical (&&, ||, !)
//  let x= true 
//  let y= false
//  console.log(x&&y)
//  console.log(!y)
//  console.log(x||y)

//  // ternary op
//  // condition ? <statement 1> : <statement 2>
//  let age =10
//  let res = age >= 18? "Adult": "Minor"
//  console.log(res)

//  // non primitive data types
// // object
// //{}object literal
// const person ={
//     name: "Sarita",
//     email:'sarita@gmail.com',
//     password:'8520',
//     age:21
// }

// //*read
// // dot notation
// let person_name= person.name
// console.log(person_name)
// console.log(person.email)
// console.log( person.name, '\n', person.email)
// //bracket notation
// console.log(person['password'])

// let key ='age'
// //error console.log(person.key)
// console.log(person[key])


// // add
// person.gender='Female' //add field to the existing object

// //modify
// person.name='Sanya'

// //delete
// delete person.password
// console.log(person)


// // array [] - key value pair : it is index , each field is called elements
// let numbers=[1,2,3,4,5]
// console.log(numbers[1])
// //adding new element
// // arr.push() from end index
// numbers.push(45,77,99)
// //arr.unshift() from start index
// numbers.unshift(0,21)
// console.log(numbers)
// //element remove
// //from start  index - shift
// let first_ele= numbers.shift()
// console.log(first_ele)
// // from end index - pop
// let end_ele= numbers.pop()
// console.log(end_ele)
// // splice
// console.log(numbers)
// numbers.splice(1, 2)
// console.log(numbers)

// const result = numbers.splice(0,0,100,99,98)
// console.log('result', result) // data, variable
// console.log(numbers)


// functions REMEMBER to comment select the code  ctrl + /
// function fun_name1(){
//     //function body
// }

// function greet(){
//     console.log('Hello World')
// }
// greet()

// // function with parameter and arguments place holder -parameter, actual input- argument
// function greet(user){
//     console.log('Hello',user)
// }
//  greet('Sarita')

// with return type function declaration
// function add(a, c){
//     console.log(a+c)
//     return a+c
// }
// const result = add(10,2)
// console.log( result)

// default parameter
// function greet(user = 'Guest'){
//     console.log('Hello', user)
// }
// greet()

//  function expression- 
//  const add = function (a,b){  //add is function type variable and function_name is remove
//     return a+b
// }

// const sum = add(12,13)
// console.log(sum)

//  arrow function - function keyword remove
// const add =(a,b)=> {
//     return a+b
// }
// const sum = add(9,1)
// console.log(sum)

// callback function- it is a function that can be passed as an argument
// const parent =(a) =>{
//     console.log('parent')//higher order
//     console.log(a)
//     a(45)
// }

// const child=(b)=>{
//     console.log('child',b) // call back
//     return 12121
// }

// parent(child)

// parent((b)=>{
//     console.log('child',b) // anonymous
//     return 12121
// })


// higher order function

// const multiplier=(factor)=>{
//     const multiply=(b)=>{ // function factory
//         return factor * b 
//     }
//     return multiply
// }
// const double=multiplier(2)
// console.log(double(10))
// console.log(double(20))

// const multiply_by_5= multiplier(5)
// console.log(multiply_by_5(9))
// console.log(multiply_by_5(20))

// const hof =(a,b,operation)=>{
//     operation(a,b)
// }
// const addition =(a,b) =>{
//     console.log(a+b)
// }

// hof(12,13,addition)

// hof (12,13,(a,b) =>{
//     console.log(a+b)
// })





//QQWERTTYYYYY
// control flow - execution flow top-bottom left-right
// control statements

// conditionals
// if
// falsy 
// false, null, undefined, 0, -0, NaN, '' //space is not empty string => false
// let age =0
// if([]){
//     console.log('if')

// }
// if-else
// if else-if-else
// switch
// let day = 2
// switch(day){
//     case 1:{
//         console.log('Sunday')
//         break
//     }
//     case 2:{
//         console.log('Monday')
//     }
//     default:{
//         console.log('Invalid day')
//     }
// }


// *loops
// while
// do while
// for

// for(let i=0; i<=10; i++){
//     console.log(i)
// }
// for in- to loop an object it gives key
// let user = {
//     name:'Sarita',
//     password: 852 
// }

// for(x in user){
//     console.log(user[x])
// }

// for of- to loop other than object like 
// for (value of [23,45,67]){
//     console.log(value)
// }
// for (value of [23,45,67]){
//     console.log(value)
// }

// for in gives key
let value = [23,45,67]
for (x in value){
    console.log(x)
}


