import express from 'express';
import {login , register} from'../controllers/auth.controllers.js';

const router = express.Router();

const middleware=(req, res, next) =>{
    console.log('route level')
    next()
}
//register route
router.post('/register',register);

//login
// router.post('/login',middleware,login)
router.post('/login',login)

export default router