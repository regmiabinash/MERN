//! error handler 
export const errorHandler=(error , req , res , next)=>{
    console.log('Error Handler', error)
    const statusCode = error?.status || 500;
    res.status(statusCode).json({
        message:error?.message || 'Internal server error'
    })
 
} 

