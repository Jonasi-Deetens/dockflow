import React from 'react'
import GridLayout from 'react-grid-layout'
import ToggleButton from '../components/ToggleButton';

const Home = () => {
    const layout = [
      { i: "a", x: 0, y: 1, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 1 },
      { i: "d", x: 4, y: 2, w: 1, h: 1 },
      { i: "e", x: 4, y: 3, w: 1, h: 2 }
    ];

    return (
        <main className=''>
            <GridLayout
                className="layout m-auto"
                layout={layout}
                cols={4}
                rowHeight={300}
                width={1200}
            >
                <div key="a" className='flex items-center justify-center rounded-3xl bg-white z-10'><ToggleButton /></div>
                <div key="b" className='flex items-center justify-center rounded-3xl bg-white z-10'>b</div>
                <div key="c" className='flex items-center justify-center rounded-3xl bg-white z-10'>c</div>
                <div key="d" className='flex items-center justify-center rounded-3xl bg-white z-10'>d</div>
                <div key="e" className='flex items-center justify-center rounded-3xl bg-white z-10'>e</div>
            </GridLayout> 
        </main>
    )
}

export default Home