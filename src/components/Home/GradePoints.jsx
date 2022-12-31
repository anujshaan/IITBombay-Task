import React from 'react'

const GradePoints = () => {
  return (
    <div className='flex items-center justify-center space-x-8 text-gray-600 my-8 text-sm font-medium'>
      <div className='flex flex-col items-end '>
        <label className='flex space-x-4 '>
          <input type="radio" className='outline-green-500' />
          <p>Excellent</p>
        </label>
          <p>{`>=80%`}</p>
      </div>
      <div className='flex flex-col items-end '>
        <label className='flex space-x-4 '>
          <input type="radio" />
          <p>Good</p>
        </label>
          <p>{`60-79%`}</p>
      </div>
      <div className='flex flex-col items-end '>
        <label className='flex space-x-4 '>
          <input type="radio" />
          <p>Average</p>
        </label>
          <p >{`40-59%`}</p>
      </div>
      <div className='flex flex-col items-end '>
        <label className='flex space-x-4 '>
          <input type="radio" />
          <p>Below avg</p>
        </label>
          <p>{`<40%`}</p>
      </div>
  </div>
  )
}

export default GradePoints