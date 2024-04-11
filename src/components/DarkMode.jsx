import React, { useEffect, useState } from 'react'
import { MdDarkMode , MdLightMode } from "react-icons/md";


const DarkMode = () => {
    const [active, setActive] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
      document.documentElement.className = theme;
    }, [theme]);

    const toggleSwitch = () => {
        setActive(!active);
        setTheme(theme => (theme === 'dark' ? 'light' : 'dark'));
    }

    return (
        <div onClick={toggleSwitch} className={`w-20 h-10 rounded-full p-1 transition-all duration-800 relative flex ${active ? 'bg-slate-500' : 'bg-gray-300'}`}>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-800 absolute bg-neutral-50 ${active ? 'right-1' : 'right-11'}`}>
                { active ? 
                    <MdLightMode className='text-yellow-500' />
                    :
                    <MdDarkMode className='text-black'/>
                }
            </div>
        </div>
    )
}

export default DarkMode