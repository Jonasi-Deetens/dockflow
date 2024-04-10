import React from 'react'

const Image = ({src, alt}) => {
  return (
    <div className='w-full h-full overflow-hidden rounded-3xl'>
        <img src={src} alt={alt} />
    </div>
  )
}

export default Image