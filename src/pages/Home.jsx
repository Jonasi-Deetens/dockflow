import React, { useState } from 'react'
import GridLayout from 'react-grid-layout'
import ComponentList from '../data/ComponentList'

const Home = () => {
    const [activeTabs, setActiveTabs] = useState([]);

    const onToggle = (tag, active) => {
        if(active) setActiveTabs([...activeTabs, tag])
        else {
            let currentTabs = [...activeTabs];
            const i = currentTabs.indexOf(tag);

            if (i != -1) {
                currentTabs.splice(i, 1);
                setActiveTabs(currentTabs);
            }
        }
    };

    const toggleMode = (active) => {
        console.log(active)
    }

    const functionNames = {
        onToggle,
        toggleMode
    }

    return (
        <main className='min-h-svh flex items-center'>
            <GridLayout
                className='layout mx-auto my-20'
                cols={8}
                rowHeight={150}
                width={1200}
            >
                { ComponentList.map((item) => {
                    const { component: Component, props, functions, id, gridData, tag} = item;
                    const functionProps = {};

                    functions.forEach(name => {
                        const functionProp = functionNames[name];

                        if (functionProp) {
                            functionProps[name] = functionProp;
                        }
                    })

                    return (
                        (activeTabs.includes(tag) || tag == "") && 
                            <div key={id} data-grid={gridData} className='grid-item flex items-center justify-center rounded-3xl bg-neutral-100 z-10 hover:shadow-md hover:cursor-grab active:shadow-lg active:cursor-grabbing active:z-20'>
                                <Component {...props} {...functionProps}/>
                            </div>
                    )
                })}
            </GridLayout> 
        </main>
    )
}

export default Home