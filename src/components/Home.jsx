
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  const username = location.state?.username

  return (
    <div className="min-h-screen w-full bg-[#F5F0FF]">
      <nav className="flex min-h-[10vh] w-full flex-wrap items-center justify-between gap-4 bg-white px-4 py-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-bold text-[#17172D] sm:text-3xl">
          MyApp
        </h1>

        <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-3 md:gap-5 lg:gap-8">
          <li className="cursor-pointer rounded-lg px-2 py-2 text-sm text-[#626275] transition-all duration-300 hover:bg-[#F0E8FF] hover:text-[#6D3DE0] sm:px-3 sm:text-base">
            Home
          </li>
          <li className="cursor-pointer rounded-lg px-2 py-2 text-sm text-[#626275] transition-all duration-300 hover:bg-[#F0E8FF] hover:text-[#6D3DE0] sm:px-3 sm:text-base">
            About Us
          </li>
          <li className="cursor-pointer rounded-lg px-2 py-2 text-sm text-[#626275] transition-all duration-300 hover:bg-[#F0E8FF] hover:text-[#6D3DE0] sm:px-3 sm:text-base">
            Services
          </li>
          <li className="cursor-pointer rounded-lg px-2 py-2 text-sm text-[#626275] transition-all duration-300 hover:bg-[#F0E8FF] hover:text-[#6D3DE0] sm:px-3 sm:text-base">
            Contact
          </li>
        </ul>

        <Link
          to="/signup"
          className="rounded-full border-2 border-transparent bg-[#6D3DE0] px-4 py-2 text-sm text-white transition-all duration-300 hover:border-[#6D3DE0] hover:bg-white hover:text-[#6D3DE0] active:scale-95 sm:text-base"
        >
          Sign Up
        </Link>
      </nav>

      <main className="flex min-h-[75vh] w-full items-center justify-center px-4 py-12 text-center sm:px-8">
        <p className="text-3xl font-semibold leading-tight text-[#17172D] sm:text-4xl md:text-5xl lg:text-6xl">
          Welcome,
          <span className="break-words text-[#6D3DE0]">{username}!</span>
        </p>
      </main>
    </div>
  )
}

export default Home
