import React from 'react'

const InfoSection = ({title, text, textTwo}) => {
  return (
    <div className='w-full h-full p-10 text-left overflow-y-auto'>
        <h2 className='font-bold my-2'>{title}</h2>
        <hr className='m-auto' />
        <p className='my-2'>{text}</p>
        <p className='my-2'>{textTwo}</p>
    </div>
  )
}

export default InfoSection