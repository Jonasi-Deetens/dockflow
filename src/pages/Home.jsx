import React from 'react'
import GridLayout from 'react-grid-layout'

const Home = () => {
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];

    return (
        <main>
            <GridLayout
                className="layout m-auto"
                layout={layout}
                cols={12}
                rowHeight={120}
                width={1200}
            >
                <div key="a" className='bg-black'>a</div>
                <div key="b" className='bg-black'>b</div>
                <div key="c" className='bg-black'>c</div>
            </GridLayout> 
        </main>
    )
}

export default Home