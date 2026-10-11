import React, { useState } from 'react'
import { Eye,EyeOff, SpaceIcon } from 'lucide-react';

function InputField(props) {

  const [PassIcon, setPassIcon] = useState(EyeOff)
  
  const [inputType,setinputType]=useState(props.type);

  function changePassword() {
    if (inputType === "password") {
        setinputType("text")
        setPassIcon(Eye)
    }
    else {
        setinputType("password")
        setPassIcon(EyeOff)
    }
  }

  return (
    <div className="w-[90%] h-auto relative">
      <input
        value={props.value}
        type={inputType}
        placeholder={props.placeholder}
        className={`h-10 w-full pl-10 pr-10 py-2 rounded-full
                   ${props.inputBg}
                   border-2 ${props.border}
                   outline-none
                   ${props.focus}`}
        onChange={props.onChange}           
      />
      <div className="mt-1 flex justify-between"><span className='text-gray-600 ml-4 text-xs'>{props.rule}</span> {props.validity && (<span className={`mr-4 font-medium text-[1rem] ${props.validityColor}`}>{props.validity}</span>)}</div>
      <props.icon1 size={20} className={`absolute top-5 left-2 -translate-y-1/2 ${props.iconColor}`}/>   
      {props.icon2 && (
        <PassIcon
          size={20}
          className={`absolute top-5 right-2 -translate-y-1/2 ${props.iconColor2} cursor-pointer`}
          onClick={changePassword}
        />
      )}
    </div>
      
  )
}

export default InputField