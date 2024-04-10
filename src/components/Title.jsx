import React from 'react'

const Title = ({title, text}) => {
  return (
    <div className='p-6'>
        <h1 className='my-2'>{title}</h1>
        <p className='text-left'>{text}</p>
    </div>
  )
}

export default Title