import React, { useState } from 'react'
import { UserRound,Mail,EyeOff,Lock,CircleCheck } from 'lucide-react';
import InputField from './InputField';
import { users } from "../data/users";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [submitMessage, setSubmitMessage] = useState("");

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  return (
    <div className='h-auto w-[95%] sm:w-[80%] md:w-[60%] lg:w-[55%] xl:w-1/3 py-10 bg-[#FFFCF9]/60 border-2 border-[#cccbca] rounded-3xl flex flex-col justify-center items-center gap-3'>

      <h1 className='text-4xl font-serif'>Welcome <span className='text-purple-700'>Back</span></h1>

      <h2 className='text-gray-600 text-xs'>Login to continue to your account</h2>

      <InputField
        value={email}
        type="email"
        placeholder="Email"
        rule="Email address"
        icon1={Mail}
        inputBg="bg-gradient-to-r from-[#F0EBFA] to-[#E8E0F5]"
        iconColor="text-[#7651C9]"
        border="border-[#8B75B8]"
        focus="focus:border-[#6542B5]"
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />

      <InputField
        value={password}
        type="password"
        placeholder="Password"
        rule="8+ chars • 1 uppercase • 1 number • 1 special"
        icon1={Lock}
        icon2={EyeOff}
        inputBg="bg-gradient-to-r from-[#F0EBFA] to-[#E8E0F5]"
        iconColor="text-[#7651C9]"
        iconColor2="text-[#7651C9]"
        border="border-[#8B75B8]"
        focus="focus:border-[#6542B5]"
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
      />

      <h3 className='text-[#6542B5] font-bold cursor-pointer hover:underline active:scale-95 ml-auto mx-[5%]'>Forgot password?</h3>

      <button className="w-[90%] py-2 mt-4 rounded-full bg-[#7651C9] text-white border-transparent border-2 font-semibold transition cursor-pointer hover:bg-[#FFFCF9]/60 hover:text-[#7651C9] hover:border-[#7651C9] active:scale-95 shadow-[0_7px_22px_rgba(70,45,130,0.45)]"
      onClick={()=>{
        console.log(users);
        const foundUser = users.some((user) => {
          return user.email === email && user.password === password
        })

        if (foundUser) {
          navigate("/home",{
            state: { username: foundUser.username }
          })
        }
        else {
          setSubmitMessage("✘ Invalid email or password")
          console.log(users);
        }

      }}>Log In →
      </button>

      {submitMessage && (
        <p className="text-red-600 text-xs text-center w-[90%]">
          {submitMessage}
        </p>
      )}

      <div className='flex items-center gap-3 w-[90%] my-2'>
        <hr className='border-[#8B75B8]/70 border-[0.1px] w-[45%]'/>
        <span className='text-gray-600 text-xs'>OR</span>
        <hr className='border-[#8B75B8]/70 border-[0.1px] w-[45%]'/>
      </div>

      <div className='flex w-[90%] justify-between items-center mx-2'>
        <div className='flex gap-2 justify-center items-center p-2 md:p-4 lg:p-5  bg-[#E8DFE5] rounded-2xl cursor-pointer active:scale-95 hover:opacity-70'>
          <img src='/appleLogo.png' alt='APPLE LOGO' className='rounded-full h-7 w-7'/>
          <h2 className='text-6 font-bold'>Apple</h2>
        </div>
        <div className='flex gap-2 justify-center items-center p-2 md:p-4 lg:p-5  bg-[#E8DFE5] rounded-2xl cursor-pointer active:scale-95 hover:opacity-70'>
          <img src='/googleLogo.jpg' alt='GOOGLE LOGO' className='rounded-full h-7 w-7'/>
          <h2 className='text-6 font-bold'>Google</h2>
        </div>
        <div className='flex gap-2 justify-center items-center p-2 md:p-4 lg:p-5  bg-[#E8DFE5] rounded-2xl cursor-pointer active:scale-95 hover:opacity-70'>
          <img src='/githubLogo.png' alt='GITHUB LOGO' className='rounded-full h-7 w-7'/>
          <h2 className='text-6 font-bold'>Github</h2>
        </div>
      </div>

      <div className='flex gap-2 items-center'>
        <p className='text-gray-600 text-xs'>Don't have an account? </p>
        <Link to="/signup" className='text-[#7651C9] font-bold text-xs cursor-pointer hover:scale-110 active:scale-100'>
          SignUp
        </Link>
      </div>

    </div>
  )
}

export default Login
