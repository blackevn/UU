'use client'

import Image from 'next/image'
import React, { use } from 'react'
import { AnimatePresence, easeIn, motion } from 'framer-motion'
import { useGeneralContext } from '@/app/context/AppContext'

const BG = () => {

  const { bgAnimate, darkMode } = useGeneralContext()

  return (

    <div className='absolute top-0 bottom-0 left-0 right-0'>
      
    <AnimatePresence>

       { bgAnimate && <motion.div
        initial={{backgroundColor: ''}}
        animate={{backgroundColor: darkMode ? 'black' : 'white' }}
        exit={{backgroundColor: ''}}
        className='w-screen h-screen  overflow-hidden relative grid place-items-center  z-[9999]'>

          <motion.div 
            initial={{
              x: 1000,
              y: 1000
            }}
            animate={{
              x: 0,
              y: 0
            }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{
              x: 1000,
              y: 1000
            }}
          className={`bg-[url('/Circle.svg')] icons absolute right-0 bottom-[-100px]`}></motion.div>
          <motion.div
            initial={{
              x: -1000,
              y: -1000
            }}
            animate={{
              x: 0,
              y: 0
            }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{
              x: -1000,
              y: -1000
            }}
          className={`bg-[url('/Green.svg')] icons absolute top-64 left-[-100px]`}></motion.div>
          <motion.div
            initial={{
              x:  1000,
              y: -1000
            }}
            animate={{
              x: 0,
              y: 0
            }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{
              x:  1000,
              y: -1000
            }}
          className=" absolute icons bg-[url('/BlueRed.svg')] right-36 top-28"></motion.div>

          <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}} 
          className='icons grid place-items-center'>
            <h1>Unicorn Universal</h1>
          </motion.div>
        </motion.div>}

        </AnimatePresence>
    </div>
  )
}

export default BG