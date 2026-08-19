// npm init -y or npm inity: to create package json
// never delete package json file
// two common js and module
// sripts  
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import http from'http' //node js default module no need to install
import userRoutes from './routes/users.routes.js'
import authRoutes from './routes/auth.routes.js'
// ! importing routes
import {connectDb} from './config/db.config.js'
import { errorHandler } from './middlewares/errorhandlers.middleware.js'
import taskRoutes from './routes/task.route.js'

// !express app instance
const app = express()
// database connection
connectDb()
// using middleware
app.use(cors({
    origin:'*'
}))
app.use(express.json()) //jason to plain object

// http server
const server = http.createServer(app)

//! middleware




// const middleware3 =(req, res, next)=>{
//     console.log('middleware3',req.user);
//     res.status(200).json({mesasge:'response from middlware'})
//     // next()
// };

// using app level middleware


// app.use(middleware3)
// app.use((req, res, next)=>{
//     console.log('mid2')
//     next()
// })


app.get('/',(req, res)=>{
    // console.log(req)

    res.json({
        mesasge:'Hello from Server!!!'
    })

})
app.get('/sarita',(req, res)=>{
    console.log(req)

    res.json({
        mesasge:'Hello from Sarita!!!'
    })

})


// CRUD USERS
//  
// app.get('/users',(req,res)=>{
//     res.status(200).json({
//         message: 'User fetched',
//         data: [],
//         success:true
//     })
// })
// // create
// app.post('/users',(req,res)=>{
//     console.log(req.body)
//     res.status(201).json({
//         message:'User created',
//         data:req.body
//     })
// })

// app.get('/users',(req,res)=>{
//     res.status(200).json({
//         message: 'User fetched 2',
//         data: [],
//         success:true
//     })
// })
// app.post('/users',(req,res)=>{
//     res.status(201).json({
//         message:'User created 2'
//     })
// })

app.use('/users',userRoutes)
app.use('/auth',authRoutes)
app.use('/tasks',taskRoutes)

// server.listen(8000, () => {
//   console.log('Server is running at http://localhost:8000');
// });




// 
server.listen(8000,() =>{
    console.log('server is running at http://localhost:8000')
})

app.use(errorHandler)

// !rest api
// api => application programming interface- bridge that connects diferent software and application
// rest => representational state transfer
// 1. stateless: server le user le pathako request save gardeina it treats every request as independent
// 2. resources => uniform resources like tables in my sql
// 3. uniform interface => use noun no verbs like /users
// 4. GET, POST, PUT/PATCH, DELETE
// post: to create new date, put: to update already existing data, get: fetch data, delete: remove data
// 5. status code-
//  100-199 -> informational
//  200-299 -> successful : 200 - OK, 201- created
//  300-399 -> redirectional 
//  400-499 -> client error :400: bad request, 401: unauthorized, 402: forbidden, 404: not found
//  500-599 -> server error : 500: internal server error, 501: not implemented, 502: server unavailable, 503: server unavailable

//  rest api is scalable
//  layered

// CRUD - create, read , update, delete
// endpoint - path like /users

// req.body => data
// req.paramas <- object
// ! api/ controller : function


//! middleware********- express feature which is a function
//! function -> req obj, res obj & next function ... middleware executes anywhere in between request response cycle
//! implement custom logic
//! can modify req res object 
//! end req res cycle 
//! call next middleware 

//! middleware types
// 1. applicaton level
// 2. route level
// 3. error handler -> err, req, res , next 

// server req -> middleware-> mid2-> mid n -> api



