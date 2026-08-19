// const add = require('./index.js')

// console.log[add]
// console.log(add.add(5,4))
// console.log(add.sub(5,4))

// const {add, sub} = require('./index.js')

// console.log[add]
// console.log(add(5,4))
// console.log(sub(5,4))

// esm
// import x from './index.js' //default import
import x, {sub} from './index.js'
console.log(x(23,45))
console.log(sub(45,45))


