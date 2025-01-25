import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 shadow-sm'>
        <Image src={'/logo.svg'} alt='logo' width={140} height={140}></Image>
        <div>
            <Button>
                Get Started 

            </Button>
        </div>
      

    </div>
  )
}

export default Header
