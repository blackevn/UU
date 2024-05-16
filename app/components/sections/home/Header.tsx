'use client'

import React from 'react'
import { AnimatedGradientLine, AvatarGroup, NavbarItem } from "../../"
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const Header = () => {

    const avartars = [
        {
          url: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          alt: 'avatar1'
        },
        {
          url: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          alt: 'avatar1'
        },
        {
          url: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          alt: 'avatar1'
        },
        {
          url: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          alt: 'avatar1'
        },
        {
          url: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          alt: 'avatar1'
        },
        {
          url: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          alt: 'avatar1'
        },
        {
          url: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          alt: 'avatar1'
        },
        {
          url: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          alt: 'avatar1'
        },
        {
          url: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          alt: 'avatar1'
        },
        {
          url: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          alt: 'avatar1'
        },
      
      
      ]

  return (

   <>
   <div className='lg:min-h-screen'>

  
   <div className='lg:h-[30%] grid place-items-center relative'>
    <AnimatedGradientLine/>
   </div>

    <div className='h-[85%] lg:h-[70%] flex flex-col lg:grid grid-cols-3'>

    {/* First Box */}

  <div className='lg:h-full w-full p-4'>
    <div className='lg:h-[40%]'>
    <h1 className='text-right text-[300%]'>Allow us to turn your business around.</h1>
    </div>
    <div className='lg:h-[60%] bg-gray-200 flex flex-col justify-between p-8 rounded-2xl'>
      <h1 className='text-[400%] font-thin max-w-[30%]'>
      Over 200+ Clients
      </h1>
      <div>
        <AvatarGroup avatars={avartars} />
      </div>
    </div>
  </div>

  {/* Second Box */}

  <div className='lg:h-full w-full p-4'>
    <div className='h-full'>
    <NavbarItem    
                
            modifier=" border-[2px] border-gray-300 text-black hover:dark:text-white"
            navItemIconModifier={`
            ${'text-7xl md:m-0 '}
            `} link={''} name={'Concepts'}
            />
    </div>
  </div>

  {/* Third Box */}

  <div className='h-full w-full p-4 relative'>
    <h1 className='lg:h-[40%] text-[300%] text-left'>Allow us to turn your business around.</h1>
    <div className='lg:h-[60%] backdrop-blur-3xl rounded-2xl relative border-1 border-gray-200'>
      <div className='w-full grid place-items-center'>
        <Image src={'/Stars.png'} alt={'Star'} width={400} height={400}/>
      </div>

      <div className='absolute bottom-0 left-0 rounded-full flex items-center gap-2 p-2 bg-white'>
        <div className='bg-black p-4 flex items-center gap-2 rounded-full text-white'>
        <h1 className='m-0 p-0 font-bold text-xl'>5</h1>
        <FaStar/>
        </div>
        <h1 className='font-bold text-black text-xl px-4'>Reviews</h1>
      </div>
    </div>
  </div>
  </div>
  </div>
   </>
  )
}

export default Header