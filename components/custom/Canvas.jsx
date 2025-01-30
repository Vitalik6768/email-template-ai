"use client"

import { useScreenSize, useDragElementLayout, useEmailTemplate } from '@/app/provider'
import { useState } from 'react'
import ColumnLayout from '@/components/layoutElements/ColumnLayout'

import React from 'react'


function Canvas() {

  const { screenSize, setScreenSize } = useScreenSize()
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout()
  const { emailTemplate, setEmailTemplate } = useEmailTemplate()
  const [dragOver, setDragOver] = useState(false)

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true)
    console.log('over')

  }

  const onDrop = (e) => {
    setDragOver(false)

    if (dragElementLayout?.dragLayout) {
      setEmailTemplate(prev => Array.isArray(prev) ? [...prev, dragElementLayout.dragLayout] : [dragElementLayout.dragLayout])
    }
    console.log('drop')
  }

  const getLayoutComponent = (layout) => {
    if (layout.type === 'column') {
      return <ColumnLayout />

    }



  }


  return (
    <div className='mt-20 flex justify-center'>
      <div className={`bg-white p-6 w-full max-w-2xl
        ${screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-md'}
        ${dragOver ? 'border-2 border-blue-500 bg-purple-100' : ''}
        
        `}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        {emailTemplate?.length > 0 ? emailTemplate?.map((layout, index) => (
          <div key={index}>
            <p className='text-black'>{getLayoutComponent(layout)}</p>
          </div>
        )) : (
          <div className="text-gray-400 text-center py-8">
            Add layout
          </div>
        )}

      </div>
    </div>
  )
}

export default Canvas
