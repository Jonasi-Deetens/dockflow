import React, { useState } from 'react'

const ToggleButton = () => {
    const [active, setActive] = useState(false);

    const toggleSwitch = () => {
        setActive(!active);
    }

    return (
        <div onClick={toggleSwitch} className={`w-20 h-10 rounded-full p-1 flex ${active ? 'justify-end bg-green-300' : 'justify-start bg-gray-300'}`}>
            <div className={`w-8 h-8 rounded-full ${active ? 'bg-white' : 'bg-green-300'}`}>

            </div>
        </div>
    )
}

export default ToggleButton