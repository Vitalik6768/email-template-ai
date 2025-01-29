import React from 'react'
import { Layout } from '@/Data/Layout'
import ElementLayoutCard from './ElementLayoutCard'
import { ElementList } from '@/Data/ElementList'


function ElementsSideBar() {
    return (
        <div className='p-5 h-screen'>
            <h2 className='text-xl font-bold pb-5'>Layout</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {Layout.map((layout, index) => (
                    <ElementLayoutCard layout={layout} index={index} />

                ))}
            </div>


            <h2 className='text-xl font-bold pb-5'>Elements</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {ElementList.map((element, index) => (
                    <ElementLayoutCard 
                        key={index} 
                        layout={element} 
                        index={index} 
                    />
                ))}
            </div>

        </div>
    )
}

export default ElementsSideBar
