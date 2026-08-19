import jwt from 'jsonwebtoken'

export const generateToken=(payload)=>{
    return jwt.sign(payload,'qwerty12345', {expiresIn:'7d'})

}

export const verifyToken =(token)=>{
    return jwt.verify(token,'qwerty12345')
}