import React from 'react'
import ToggleButton from './ToggleButton'

const ToggleableItem = ({title, onToggle}) => {
  return (
    <div className='flex flex-col justify-between items-center'>
        <h2 className='font-bold'>{title}</h2>
        <br />
        <ToggleButton onToggle={onToggle} />
    </div>
  )
}

export default ToggleableItem