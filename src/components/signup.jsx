import React, { useState } from 'react'
import { UserRound,Mail,EyeOff,Lock,CircleCheck } from 'lucide-react';
import InputField from './InputField';
import { users } from "../data/users";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  let userNameRegex = /^\w{3,15}$/;
  let emailRegex=/^(?!\.)(?!.*\.\.)(?![^@]*\.$)[\w\-+\.]+@[a-z\d-]+\.[a-z]{2,20}(\.[a-z]{2,20})?$/i;
  let passwordRegex=/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPass, setconfirmPass] = useState("")

  const [usernameValid, setUsernameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const [confirmPassValid, setConfirmPassValid] = useState(false)

  const [usernameValidity, setUsernameValidity] = useState("")
  const [emailValidity, setEmailValidity] = useState("")
  const [passwordValidity, setPasswordValidity] = useState("")
  const [confirmPassValidity, setConfirmPassValidity] = useState("")

  const [submitMessage, setSubmitMessage] = useState("")

  const navigate = useNavigate()

  return (
    <div className='h-auto w-[95%] sm:w-[80%] md:w-[60%] lg:w-[55%] xl:w-1/3 py-10 bg-[#FFFCF9]/60 border-2 border-[#cccbca] rounded-3xl flex flex-col justify-center items-center gap-3'>

      <h1 className='text-4xl font-serif'>Create <span className='text-orange-500'>Account</span></h1>

      <h2 className='text-gray-600 text-xs'>Join us and get started</h2>

      <InputField
        value={username}
        type="text"
        placeholder="Username"
        rule="3-15 letters, numbers or _ only"
        icon1={UserRound}
        inputBg="bg-gradient-to-r from-[#FBE9DF] to-[#F3CDBB]"
        iconColor="text-[#9B5A42]"
        border="border-[#C98262]"
        focus="focus:border-[#9B5A42]"
        validity={usernameValidity}
        validityColor= {usernameValid? "text-green-600":"text-red-600"} 

        onChange={(e) => {
          setUsername(e.target.value)
          if(userNameRegex.test(e.target.value)){
            const usernameExists = users.some((user) => {
              return user.username === e.target.value
            })

            if (usernameExists) {
              setUsernameValidity("✘ Username already exists")
              setUsernameValid(false)
            }
            else {
              setUsernameValidity("✓ Valid")
              setUsernameValid(true)
            }
          }
          else{
            setUsernameValidity("✘ Invalid");
            setUsernameValid(false);
          }

        }}
      />

      <InputField
        value={email}
        type="email"
        placeholder="Email"
        rule="Email address"
        icon1={Mail}
        inputBg="bg-gradient-to-r from-[#FBE9DF] to-[#F3CDBB]"
        iconColor="text-[#9B5A42]"
        border="border-[#C98262]"
        focus="focus:border-[#9B5A42]"
        validity={emailValidity}
        validityColor= {emailValid? "text-green-600":"text-red-600"} 
        
        onChange={(e) => {
          setEmail(e.target.value)
          if(emailRegex.test(e.target.value)){
            setEmailValidity("✓ Valid");
            setEmailValid(true);
          }
          else{
            setEmailValidity("✘ Invalid");
            setEmailValid(false);
          }

        }}
      />

      <InputField
        value={password}
        type="password"
        placeholder="Password"
        rule="8+ chars • 1 uppercase • 1 number • 1 special"
        icon1={Lock}
        icon2={EyeOff}
        inputBg="bg-gradient-to-r from-[#FBE9DF] to-[#F3CDBB]"
        iconColor="text-[#9B5A42]"
        iconColor2="text-[#9B5A42]"
        border="border-[#C98262]"
        focus="focus:border-[#9B5A42]"
        validity={passwordValidity}
        validityColor= {passwordValid? "text-green-600":"text-red-600"} 
        
        onChange={(e) => {
          setPassword(e.target.value)
          if(passwordRegex.test(e.target.value)){
            setPasswordValidity("✓ Valid");
            setPasswordValid(true);
          }
          else{
            setPasswordValidity("✘ Invalid");
            setPasswordValid(false);
          }

        }}
      />

      <InputField
        value={confirmPass}
        type="password"
        placeholder="Confirm Password"
        rule="8+ chars • 1 uppercase • 1 number • 1 special"
        icon1={Lock}
        icon2={EyeOff}
        inputBg="bg-gradient-to-r from-[#FBE9DF] to-[#F3CDBB]"
        iconColor="text-[#9B5A42]"
        iconColor2="text-[#9B5A42]"
        border="border-[#C98262]"
        focus="focus:border-[#9B5A42]"
        validity={confirmPassValidity}
        validityColor= {confirmPassValid? "text-green-600":"text-red-600"} 
        
        onChange={(e) => {
          setconfirmPass(e.target.value)
          if (e.target.value === password) {
            setConfirmPassValidity("✓ Matches")
            setConfirmPassValid(true)
          }
          else {
            setConfirmPassValidity("✘ Doesn't match")
            setConfirmPassValid(false)
          }

        }}
      />

      <button className="w-[90%] py-2 mt-4 rounded-full bg-[#C97050] text-white border-transparent border-2 font-semibold transition cursor-pointer hover:bg-[#FFFCF9] hover:text-[#C97050] hover:border-[#C97050] active:scale-95 shadow-[0_6px_20px_rgba(120,55,35,0.45)]" onClick={()=>{
          if(usernameValid && emailValid && passwordValid && confirmPassValid){
            navigate("/home",{
              state: { username: username }
            });
            setSubmitMessage("");

            setUsername("");
            setEmail("");
            setPassword("");
            setconfirmPass("");

            setUsernameValid(false);
            setEmailValid(false);
            setPasswordValid(false);
            setConfirmPassValid(false);

            setUsernameValidity("");
            setEmailValidity("");
            setPasswordValidity("");
            setConfirmPassValidity("");

            users.push({
              username: username,
              email: email,
              password: password
            });

            localStorage.setItem("users", JSON.stringify(users));
          }
          else{
            setSubmitMessage("✘ Please fix the highlighted fields before creating your account.");
          }
        }}>Create Account →
      </button>

      {submitMessage && (
        <p className="text-red-600 text-xs text-center w-[90%]">
          {submitMessage}
        </p>
      )}

      <div className='flex items-center gap-3 w-[90%] my-2'>
        <hr className='border-[#dcaa97]/70 border-[0.1px] w-[45%]'/>
        <span className='text-gray-600 text-xs'>OR</span>
        <hr className='border-[#dcaa97]/70 border-[0.1px] w-[45%]'/>
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
        <p className='text-gray-600 text-xs'>Already have an account? </p>
        <Link to="/login" className='text-[#C97050] font-bold text-xs cursor-pointer hover:scale-110 active:scale-100'>Login</Link>
      </div>

    </div>
  )
}

export default Signup
