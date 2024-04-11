import React from 'react'
import { PiStudentFill } from 'react-icons/pi'


const Degree = ({school, course, year}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className='my-5'>Degree</h2>
        <hr className='w-full mb-5' />
        <PiStudentFill className='!text-green-500' size={"50px"}/>
        <h3 className='my-5'>{school}</h3>
        <p className='!text-green-500'>{course}</p>
        <p className='my-5'>{year}</p>
    </div>
  )
}

export default Degree