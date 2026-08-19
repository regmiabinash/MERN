import React, { useState } from 'react'
import { login } from '../../api/auth.api'

const LoginForm = () => {
   
    // *hook: it's a functions ,state, side-effect, memorization
    // can only be used in react ko component and not in conditionals better to use on top of a function
    // useState()
    // useEffect()

    // const [password,setpassword] = useState('')
    // const [email,setemail] = useState('')


    // const onPasswordChange=(e)=>{
    //     console.log('password changed',e.target.value);
    //     setpassword(e.target.value)
    // }

    // const onEmailChange=(e)=>{
    //     console.log('email changed',e.target.value);
    //     setemail(e.target.value)
    // }

    const navigate = useNavigate()


    const [formData,setFormData] = useState({
        email:"",
        password:""

    })

    const handleChange = (e)=>{
        // console.log(e.target)
        // console.log(e.target.value,e.target.name)
        let name =  e.target.name;
        let value = e.target.value //key dynamic cha bhanne use this[]

        setFormData({
            ...formData,
            [name]:value
        })
    }

    console.log('state',formData)

    const onFormSubmit= async(e) =>{
      try{
        e.preventDefault();
        console.log(formData)
        const response = await login(formData)
        // success
        if(response.data && response.access_token){
            localStorage.setItem('access_token',response.access_token)
            navigate('/'), {replace:true}
        }

        console.log('on submit',response)

        return(response.data)
      }catch(error){
        console.log(error)
      }
    }






  return (
    <div className='mt-10'>
                <form onSubmit={onFormSubmit}className='flex flex-col gap-4'>
                     {/* Email*/}
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold' htmlFor='email'>Email</label>
                        {/* input */}
                        <input
                        className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400'
                        onChange={handleChange}
                         id='eamil'
                         type='email'
                         name='email'
                         value={formData.email}
                         placeholder='johndoe@gmail.com'
                         required
                        />
                    </div>
                     {/* Password */}
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold' htmlFor='password'>Password</label>
                        {/* input */}
                        <input
                        className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400'
                        onChange={handleChange}
                         id='password'
                         type='password'
                         name='password'
                         value={formData.password}
                         placeholder='Enter password'
                         required
                        />
                    </div>
        
                    {/* Submit button */}
                    <div className='w-full mt-4'>
                        <button
                        className='w-full bg-blue-600 py-3.5 text-white font-bold rounded-sm cursor-pointer'
                         type="submit">Login</button>
                    </div>
                </form>
            </div>
  )
}

export default LoginForm