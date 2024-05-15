'use client'
import React from 'react'
import Button from '../button'
import { CgMenuRight } from "react-icons/cg";
import { useGeneralContext } from '@/app/context/AppContext';
import Menu from './menu';
import { AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaAdjust} from 'react-icons/fa'
import { FiDollarSign } from "react-icons/fi";
import Toggle from '../toggle';

const Navbar = () => {

    const { menuToggle, handleToggle, setMenuToggle, handleBGAnimate, darkMode, setDarkMode, toggleDarkMode } = useGeneralContext()

    console.log(menuToggle);
    

  return <> <div className='fixed z-[999] w-screen'>
            <div className='flex items-center justify-between p-4'>
                <div>
                    <h1>Unicorn Universal</h1>
                </div>
                <div className='flex gap-8'>

                    <Toggle 
                    icon={FaAdjust} 
                    toggleEvent={ toggleDarkMode } 
                    on={FaSun} 
                    off={FaMoon } 
                    modifier={`${darkMode ? 'text-white' : ''}`} 
                    modifier1={''} 
                    modifier2={''} 
                    checked={darkMode} 
                    placeholder={''}/>

                    <Button
                    text='Pricing'
                    icon={FiDollarSign}
                    modifier='btn bg-black'
                    />

                    <Button
                    modifier='z-[999]'
                    icon={CgMenuRight}
                    iconModifier={`text-2xl`}
                    text=''
                    clickEvent={() => {
                        handleToggle()
                    }}
                    />

                </div>
            </div>
            </div>
            
            <AnimatePresence>
            { menuToggle && <Menu/> }
            </AnimatePresence>
         </>
}

export default Navbar