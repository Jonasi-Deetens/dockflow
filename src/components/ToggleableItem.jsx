import React from 'react'
import ToggleButton from './ToggleButton'

const ToggleableItem = ({title, onToggle}) => {
  const handleToggle = (active) => {
    onToggle(title, active)
  }
  
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <h2 className='font-bold'>{title}</h2>
        <br />
        <ToggleButton onToggle={handleToggle} />
    </div>
  )
}

export default ToggleableItem