import React from 'react'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
      <h2 className='text-6xl font-bold text-gray-500'>404 | Page Not Found !</h2>
      <Link to='/'>
        <button className='mt-10 bg-gray-500 p-4 px-10 rounded-xl text-white font-semibold hover:bg-black flex items-center back-to-home'>
          <HiArrowLongLeft className='mr-3 text-xl left-arrow'/>
          Get Back to Home
        </button>
      </Link>
    </div>
  )
}

export default PageNotFound