'use client'
import { SlArrowRightCircle } from "react-icons/sl";
import { PiArrowCircleRightThin } from "react-icons/pi";
import Button from "../button";
import { useAnimate, motion, useAnimationControls, AnimatePresence } from "framer-motion"
import { useGeneralContext } from "@/app/context/AppContext";
import { useEffect } from "react";
import { useVariant } from "@/app/hooks";
import { isAbsolute } from "path";


export interface NavigationLinks {
  link: string
  name: string 
  path?: boolean
  clicked?: () => void
  modifier?: string
  navItemIconModifier?: string
  circleColorModifier?: string
  image?: string
}

const NavItem: React.FC<NavigationLinks> = ({ link, name, clicked, modifier, path, navItemIconModifier, circleColorModifier, image}) => {

  const [scope, animate] = useAnimate()
  const rotateAnimate = useAnimationControls()
  const { width } = useGeneralContext()
  const { menuArrowRotate, menuChildren } = useVariant()

 const rotateElementsOn = async () => {
     animate('button', {rotate: -40, opacity: 1})
     animate('#title', {opacity: [0, 0, 1], x: 0})
     animate('#divCircleColor', {opacity: [0, 0, 1], scale: [1, 2]})
     animate('#iconImage', {opacity: 1})
  }
  
 const rotateElementsOff = async () => {
      animate('#divCircleColor', { scale: [0, 0, 0, 1], opacity: 0})
     animate('button', {rotate: 0, opacity: 0})
     animate('#title', {opacity: 0, x: -400})
     animate('#iconImage', {opacity: 0.4})
  }

  return <div ref={scope} className={`${modifier} dark:text-white navItem ${name !== "Contact" && 'hover:text-black' }`} onMouseEnter={rotateElementsOn} onMouseLeave={rotateElementsOff} onClick={clicked}>

          <div id="divCircleColor" className={`${circleColorModifier} absolute bottom-[-100px] left-[-100px] w-[70%] h-[70%] rounded-full opacity-0 blur-3xl`}></div>
            <motion.img initial={{opacity: 0.4}} id="iconImage" className="w-[50%] absolute left-[25%] md:top-[50%] lg:top-[35%] xl:top-[25%]"  src={image} alt="" />
               <div className={`flex ${ width <= 900 ? 'justify-center' : "justify-between"} w-full ${ name === 'Pricing' && width <= 1260  ? 'items-start' : 'items-center'  } `}>
                 <h1  id="title" className={`opacity-0 font-thin text-sm md:text-lg lg:text-2xl ${ width <= 900 && 'hidden'} z-40 pl-2`}>
                 {name && `Go to ${name} page`}
                 </h1>
                 <div className={`${width <= 900 ? 'absolute bottom-[40%]' : ''} ${name === "Pricing" ? 'bottom-[25%]' : ''}` }>
                  <Button
                  text=""
                  modifier="opacity-0 p-0 m-0"
                  icon={PiArrowCircleRightThin}
                  iconModifier={`font-thin ${navItemIconModifier}`}
                  />
                 </div>
                </div>
                <div>
                <h1 className="font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl absolute bottom-0 left-0 m-4 md:m-6 lg:m-6 xl:m-8">{name}</h1>
                </div>
            </div>
}

export default NavItem
