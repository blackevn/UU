'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Header, SecondSection} from '../components'

const HomePage = () => {
  return (
    <div className='h-screen relative dark:text-white text-black'> 

    {/* Home screen menu */}

    <Header/>

    {/* Second section */}

    <SecondSection/>

    {/* Background */}

    <div className='absolute top-0 bottom-0 left-0 right-0 -z-20 bg-white text-black dark:bg-black dark:text-white '>

    <AnimatePresence>

      <motion.div 
      draggable={true} 
      className={`bg-[url('/Circle.svg')] icons absolute right-0 bottom-[-100px] `}></motion.div>
      <motion.div
      draggable={true}
      className={`bg-[url('/Green.svg')] icons absolute top-64 left-[-100px]`}></motion.div>
      <motion.div
      draggable
      className=" absolute icons bg-[url('/BlueRed.svg')] right-36 top-28">
      </motion.div>

      </AnimatePresence>
    </div>
    </div>
  )
}

export default HomePage