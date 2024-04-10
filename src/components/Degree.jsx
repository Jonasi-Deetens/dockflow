import React from 'react'
import { PiStudentFill } from 'react-icons/pi'


const Degree = ({school, course, year}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <PiStudentFill className='text-green-500' size={"50px"}/>
        <h2 className='my-5'>{school}</h2>
        <h3 className='text-green-500'>{course}</h3>
        <p className='my-5'>{year}</p>
    </div>
  )
}

export default Degree