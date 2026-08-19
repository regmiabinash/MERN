// const add=(a,b)=>{
//     return a+b
// }
// console.log(add(10,12))

// const sub=(a,b) =>{
//     return a-b
// }
// console.log(sub(5,5))
//  for single module.exports = add

// module.exports = {
//     add,
//     sub
// }
// module.exports = sub for single otherwise it throws negative

// another way to do export
// exports.add=(a,b)=>{
//     return a+b
// }


// exports.sub=(a,b) =>{
//     return a-b
// }

// !esm

//  name import / export
export const sub=(a,b) =>{
    return a-b
}

// default
const add=(a,b)=>{
    return a+b
}

export default add

