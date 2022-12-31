import React from 'react'
import userImg from '../assets/user.jpg'

import {HiArrowTrendingUp, HiChartPie} from 'react-icons/hi2';
import {AiFillCaretDown} from 'react-icons/ai'
const Header = () => {
  return (
    <div className='flex items-center justify-between px-16 py-4 mb-10 shadow-md'>
      <div className='text-2xl font-bold logo'>
        PepStudy
      </div>
      <div className='flex space-x-12'>
        <div className='header-nav'>
          <HiArrowTrendingUp/>
          <p>Progress</p>
        </div>
        <div className='header-nav'>
          <HiChartPie/>
          <p>Analytics</p>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <img src={userImg} alt="" className='w-12 h-12 rounded-full '/>
        <p>SWATI</p>
        <AiFillCaretDown/>
      </div>
    </div>
  )
}

export default Header