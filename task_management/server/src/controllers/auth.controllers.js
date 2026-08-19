import { compare } from 'bcryptjs';
import User from "../models/user.model.js";
import {hashPassword, comparePasssword} from "../utils/bcrypt_utils.js";
import { generateToken } from '../utils/jwt.utils.js';
// scheme : blueprint of database here:tables= collections



// register user
export const register = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!first_name) {
     next({ message: 'first_name is required', status: 400 });
      return 
    }
    if (!last_name) {
       next({ message: 'last_name is required', status: 400 });
        return 
    }
    if (!email) {
      next({ message: 'email is required', status: 400 });
       return 
    }
    if (!password) {
      next({ message: 'password is required', status: 400 });
       return 
    }


    const hashPass = await hashPassword(password);

    const user = await User.create({
      first_name,
      last_name,
      email,
      password: hashPass,
    });

    res.status(201).json({
      message: 'Account created',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

//login
export const login = async(req, res , next) => {
    try{
        console.log("login", req.user)
        const {email, password}= req.body;
        if (!email) {
            // throw new Error('email is required');
             next({
                message:'email is required',
                status:400
            })
             return 
        }
        if (!password) {
            // throw new Error('password is required');// password needs to be hash once hashed it cannot go back to the original making sure only the user knows the password
             next({
                message:'password is required',
                status:400
            })
             return 
        }
        const user = await User.findOne({email:email})

        if(!user){
            // throw new Error('Invalid email or password')
              next({
                message:'Invalid email or password',
                status:400
            })
            return 
        }

        const is_pass_matched = await comparePasssword(password, user.password)
        if(!is_pass_matched){
            // throw new Error('Invalid email or password')
              next({
                message:'Invalid email or password',
                status:400
            })
            return
        }

        const access_token = generateToken({
          id:user._id,
          email:user.email,
          first_name:user.first_name,
          last_name:user.last_name
        })


    res.status(201).json({
        message: 'Login success',
        data: user,
        access_token:access_token
    });
    }catch(error){
        next(error)
         return 
    //     res.status(500).json({
    //         message: error?.message || 'something went wrong'
        // });
       
    }
};