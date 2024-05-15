'use client'

import { ButtonProps } from "@/types/interfaces"
import { FaIcons } from "react-icons/fa"

const Button: React.FC<ButtonProps> = (props) => {

    const {

           text = "Button", 
           textColor, 
           bgColor, 
           clickEvent, 
           borderColor, 
           icon: Icon = FaIcons, 
           children,
           modifier,
           tip,
           isActive,
           disabled,
           iconModifier
          
          } = props

  return (
    <>
    
    <button type="button" disabled={disabled} onClick={clickEvent}
    
    className={`
      
        flex
        items-center
        justify-center
        gap-2
        rounded-full
        btn-sm
        text-[12px]
        lg: text-md
        
        ${isActive}
        ${modifier}
        ${borderColor} 
        ${textColor}
        ${bgColor}
     
 
    `}

     data-tip={tip}
    
          ><Icon className={iconModifier}/>
          
            {text}
            {children}
        
        </button>

    </>
  )
}


export default Button;