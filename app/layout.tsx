'use client'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { BG, Navbar } from './components'
import { GeneralAppContext, useGeneralContext } from '@/app/context/AppContext'
import Menu from './components/ui/nav/menu'
import { AnimatePresence, motion } from 'framer-motion'

const montserrat = Montserrat({
  subsets: ['latin'],
})

 const metadata: Metadata = {
  title: 'Unicorn Universal',
  description: 'Unicorn Universal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={`${montserrat.className} relative`}>
      <GeneralAppContext>
       
          <BG/>

       <Navbar/>
       <AnimatePresence>
       <motion.div className='h-screen overflow-scroll' initial={{opacity: 0, y: -100 }} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -100}} transition={{ type: 'spring', stiffness: 150}}>
        {children}
       </motion.div>
       </AnimatePresence>
      </GeneralAppContext>
      </body>
    </html>
  )
}
