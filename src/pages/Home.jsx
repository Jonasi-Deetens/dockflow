import React from 'react'
import GridLayout from 'react-grid-layout'
import ComponentList from '../data/ComponentList'

const Home = () => {

    const onToggle = (active) => {
        console.log(active)
    }

    const functionNames = {
        onToggle
    }

    return (
        <main className='min-h-svh flex items-center'>
            <GridLayout
                className='layout m-auto'
                cols={8}
                rowHeight={150}
                width={1200}
            >
                { ComponentList.map((item) => {
                    const { component: Component, props, functions, id, gridData} = item;
                    const functionProps = {};

                    functions.forEach(name => {
                        const functionProp = functionNames[name];

                        if (functionProp) {
                            functionProps[name] = functionProp;
                        }
                    })

                    return (
                        <div key={id} data-grid={gridData} className='flex items-center justify-center rounded-3xl bg-neutral-100 z-10 hover:shadow-md hover:cursor-grab active:shadow-lg active:cursor-grabbing active:z-20'>
                            <Component {...props} {...functionProps}/>
                        </div>
                    )
                })}
            </GridLayout> 
        </main>
    )
}

export default Home