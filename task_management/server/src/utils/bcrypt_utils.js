import bcrypt from 'bcryptjs'


// ! hash passwords
export const hashPassword = async(password) =>{
    try{
        const salt = await bcrypt.genSalt(10); // salt assures that for the same input the hash is different
        return bcrypt.hash(password, salt);
    }catch(error){
        console.log(error);
    }
};

export const comparePasssword = async(password, hash) =>{
    try{
        return await bcrypt.compare(password, hash)
    }catch(error){
        console.log(error)
    }
}