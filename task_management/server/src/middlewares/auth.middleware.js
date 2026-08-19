import User from "../models/user.model.js"
import { verifyToken } from "../utils/jwt.utils.js"



// 
export const authenticate=async(req,res,next)=>{
    try{
        // get acces token from auth header
        const token = req.headers['authorization']

        if(!token){
            next({
                message:'Unaithorized access denied',
                status:401
            })
            return
        }

        // check token validity
        const decoded_data = verifyToken(token)
        console.log(decoded_data)

        if(!decoded_data){
            next({
                message:'Invalid token',
                status:400
            })
        }

        // token expiry

        if(decoded_data.exp*1000<Date.now()){
            next({
                message:'Unauthorized access denied',
                status:401
            })
            return
        }

        // uses ho ki nai
        const user = await User.findOne({_id:decoded_data.id,email:decoded_data.email})

        if(!user){
            next({
                message:'Unauthorized access denied',
                status:401
            })
            return
        }

        req.user = {
            id:user._id,
            email:user.email,
        }
        next()
    }catch(error){
        next(error)
    }
}