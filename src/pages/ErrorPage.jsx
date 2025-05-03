import React from 'react'
import { NavLink } from 'react-router'

const ErrorPage = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen leading-relaxed tracking-widest'>
      <h1 className='text-3xl sm:text-6xl uppercase font-semibold'>Error 404</h1>
      <p className='text-2xl sm:text-5xl uppercase mt-5 font-semibold'>Page Not Found</p>
      <NavLink className="bg-pink-300 px-3 sm:px-10 text-sm sm:text-base py-2 rounded-full mt-10 uppercase font-semibold" to="/">Go to Home</NavLink>
    </div>
  )
}

export default ErrorPage