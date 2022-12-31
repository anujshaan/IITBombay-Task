import React from 'react'
import {HiArrowLeft} from 'react-icons/hi2'
import GradePoints from '../components/Home/GradePoints'

const Home = () => {
  return (
    <div className=' mx-14'>
      
      {/* ----------------Page Title------------- */}
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center'>
          <HiArrowLeft/>
          <div className='ml-4 text-gray-500 font-semibold'>
            <p>Class Performace</p>
            <p>(Standard-wise)</p>
          </div>
        </div>
        <div>
          <p className='font-semibold'>Select Test:</p>
          <div className="cursor-pointer px-2 py-1 my-2 w-[200px] shadow-md rounded-md shadow-gray-400">
            <select name="" id="">
              <option value="">Cycle Test 1</option>
            </select>
          </div>
        </div>
      </div>

      {/* ----------Subjects Options-------------- */}
      <div className='flex items-center mx-10 space-x-4'>
        <button className='subject_name-design active'>Social Science</button>
        <button className='subject_name-design'>Science</button>
        <button className='subject_name-design'>Mathematics</button>
      </div>

      {/* --------------Grade Options-------------- */}
      <GradePoints/>
      <div></div>
      <div></div>
    </div>
  )
}

export default Home