// 9-01-26
// let const
// template literal

// destructuring- expanding the value of array and object
// let user={
//     name:'Sarita',
//     email:'sarita@gmail.com',
//     age:21,
// }

// let{name, email, age}= user
// console.log(name, email, age)

// changing the variable name
// let name=''
// let{name:user_name, email, age}= user
// console.log(user_name, email, age)


// rest and spread operators
//spread and rest operator(...)
//rest
// let {name,...rest} = user  //name bahek sab rest ma aaucha
// console.log(rest)

// let[a,b,...x]=arr         //a,b bahek sabai x ma
// console.log(x)

//
// const add =(...numbers)=>{
// //     return a+b
// console.log(numbers)
// return numbers.reduce((acc,val)=>{
//     return acc= acc+ val
// },0)
// }
// console.log(add(1,54,6,78))

// // ! spread(...) expands each element
// let arr=[1,2,3,4,5]
// console.log(arr)
// console.log(...arr)

// let arr2=[...arr]
// // let arr2= arr
// arr2.push(100)
// console.log(arr)
// console.log(arr2)

// let user={
//     name:'Sarita',
//     email:'sarita@gmail.com',
//     age:21,
// }

// let user1={password:'12345',...user}
// console.log(user1)

// console.log(Math.max(99,0)) //math le array ledina so spread use garne to fint the max value in an array
// console.log(Math.max(...arr))

// * async - 
// timers
// setTimeout()

console.log('start')
const timer_id= setTimeout(() => {
    console.log('processing');
}, 2000);
clearTimeout(timer_id);
console.log('end')

// if we want to do the task at certain interval

// let i=0
// let id=setInterval(()=>{

//     console.log(i++)
//     console.log(i)
//     if(i==10){
//         clearInterval(id)
//     }
// },1000)

// promise - object that represent the async task
// pending, fullfill, rejected
// const api=()=>{
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//          const res = false
//         if(res){
//             resolve({message:'Promise Fulfilled'})
//         }else{
//             reject({message: 'Promise rejected'})
//         }
//        },2000)
//     })
// }
// console.log(api())

// promise handling/ promise chain when promise success bhayo bhanne
// api().then((data)=>{
//     console.log('then')//true success
//     console.log(data)
// }).catch((error)=>{
//     console.log('error')//false fail
// }).finally(()=>{
//     //task to be done in both then and case
//     console.log('finally')
// })

// fetch -api asynfunction returns promise
// fetch("https://jsonplaceholder.typicode.com/posts/45")
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((erro)=>{
//     console.log(error)
// })// we use 2 then bcz  json is unredable so to be in readable form caleed promise thening

// asyn await
const fetchpost = async () => {
   try{
     const response = await fetch("https://jsonplaceholder.typicode.com/posts/45");
    const data = await response.json();

    console.log(data);
   }catch (error){
    console.log('error')
   }finally{
    console.log('finally')
   }
};

fetchpost();


// asyn func





