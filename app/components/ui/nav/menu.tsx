'use client'

import { useGeneralContext } from "@/app/context/AppContext";
import Button from "../button"
import { GrClose } from "react-icons/gr";
import { useHeight, useLinks } from "@/app/hooks";
import { NavbarItem, Toggle } from "../..";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import { FaMoon, FaSun, FaAdjust} from 'react-icons/fa'

const Menu = () => {

    const { handleToggle, width, toggleDarkMode, darkMode } = useGeneralContext()
    const { navLinks } = useLinks()

    const firstThree =  navLinks.splice(0,3)
    const lastTwo = navLinks.splice(0)

    const mobileArray = [ ...firstThree, ...lastTwo]
    const mobileArr = mobileArray.splice(0, 4)
    const mobilePricing = mobileArray.splice(0)
    
  return <motion.div
            initial={{opacity: 0, y: -500}}
            animate={{opacity: 1, y: 0 }}
            exit={{opacity: 0, y: -500}}
            transition={{duration: 1, type: 'spring', stiffness: 100}}
            className='fixed top-0 bottom-0 right-0 left-0 overflow-hidden w-screen z-[999] h-full bg-white dark:bg-black dark:text-white text-black'>
            <div className="p-4 flex flex-col justify-between h-full w-full relative">

            <AnimatePresence>

                <motion.div 
                draggable={true} 
                className={`bg-[url('/Circle.svg')] icons absolute right-0 bottom-[-100px]`}></motion.div>
                <motion.div
                draggable={true}
                className={`bg-[url('/Green.svg')] icons absolute top-64 left-[-100px]`}></motion.div>
                <motion.div
                draggable
                className="absolute icons bg-[url('/BlueRed.svg')] right-36 top-28">
                </motion.div>

            </AnimatePresence>


            <div className="flex gap-8 items-center ">
                <div className="flex">

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
                    icon={GrClose}
                    text=""
                    iconModifier={`text-2xl`}   
                    clickEvent={handleToggle}
                    modifier=" absolute right-0 mx-4"
                    />
                </div>
            </div>   
            <div className="h-[80%] md:h-[50%] xl:h-[50%] ">
            <div className="flex justify-between items-end lg:py-4">
                <h1 className="text-4xl md:text-5xl xl:text-7xl font-black">Unicorn Universal</h1>
                <div className="text-sm">
                <h1 className="leading-3 m-0 p-0">Call us: (+706) 896-0751</h1> 
                <h1 className="m-0 p-0  ">info@unicornuniversal.com</h1> 
               
                </div>
            </div>
                { width >= 1200  ?  <div className="flex w-full h-[85%] gap-4">

                <div className="grid w-[75%] grid-cols-3 gap-4">
                {firstThree.map((item, index) => (<NavbarItem 
                clicked={() => handleToggle()}
                image={item.img}
                key={item.name}
                link={item.url} 
                name={item.name} 
                modifier={`border-gray-300 border-[2px] z-40
                ${item.name === 'Home' ? 'hover:bg-[#7AE4FC] hover:border-white' : '' }
                ${item.name === 'About' ? 'hover:bg-red-500 hover:border-white ' : ''}
                ${item.name === 'Concepts' ? 'hover:bg-[#ff930f] hover:border-white ' : ''}
                `}
                circleColorModifier={`
                ${item.name === 'Home' ? 'bg-[yellow]' : '' }
                ${item.name === 'About' ? 'bg-[#5FC3E4]' : '' }
                ${item.name === 'Concepts' ? 'bg-[#fff95b]' : '' }
                `}
                navItemIconModifier='text-7xl'
                />))}

                </div>
                <div className="flex flex-col w-[25%] gap-4 ">

                {lastTwo.map((item, index) => (<NavbarItem 
                clicked={() => handleToggle()}
                navItemIconModifier='text-7xl'
                image={item.img}
                key={item.name} 
                link={item.url} 
                name={item.name} 
                modifier={` z-40 border-[2px] border-gray-300
                ${item.name === 'Contact' ? 'bg-black text-white border-white ' : '' }
                ${item.name === 'Pricing' ? 'backdrop-blur-3xl text-black border-gray-200' : '' }
             
                 `}
                 circleColorModifier={`
                 ${item.name === 'Contact' ? 'bg-blue-600' : '' }
                 
                 `}/>))}

                </div>
            </div>
            
            :
            
            <div className="s`pace-y-4 h-full py-4`">
                  <div className="grid grid-cols-2 gap-4 h-[70%]">
                        {mobileArr.map(item => (<NavbarItem 
                        clicked={() => handleToggle()}
                        link={item.url} 
                        name={item.name}
                        modifier={`h-full border-[1px] border-gray-300
                        ${item.name === 'Contact' ? ' bg-black text-white text-black border-4 border-gray-200' : '' }
                        `}
                        navItemIconModifier={`
                        ${'text-7xl md:m-0'}
                        `}
                        />))}
                  </div>
                  <div className="w-full h-[20%]">
                        {mobilePricing.map(item => (<NavbarItem 
                        clicked={() => handleToggle()}
                        link={item.url} 
                        name={item.name}
                        modifier="backdrop-blur-3xl"
                        navItemIconModifier={`
                        ${'text-7xl md:m-0 '}
                   
                        `}
                        />))}
                  </div>
            </div>
            
            }
            </div>
            </div>
        </motion.div>
}

export default Menu