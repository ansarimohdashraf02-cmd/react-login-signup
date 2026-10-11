import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import Home from './components/Home'
import './App.css'

function App() {

  return (
    <div className="h-screen w-full bg-linear-to-br from-[#EDE7E2] via-[#E7DCEB] to-[#F0C8B8] flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
