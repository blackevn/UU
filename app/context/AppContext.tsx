'use client'

import {useContext, createContext, useState, useEffect } from "react";
import { IProps, ContextData } from "@/types/interfaces";
import { useToggle, useHeight, useWidth, useDarkMode } from "../hooks";

const GeneralContext = createContext<ContextData>({
    navRotate: false,
    height: 0,
    width: 0,
    menuToggle: false,
    handleToggle: ()=> {},
    darkMode: false,
    toggleDarkMode: function (): void {
        throw new Error("Function not implemented.");
    },
}) 

export const GeneralAppContext = ({ children }: IProps) => {

    const [ height ] = useHeight()
    const [ width ] = useWidth() 
    const [ darkMode, setDarkMode ] = useDarkMode()
    const [ menuToggle, handleToggle, setMenuToggle ] = useToggle(false)
    const [ navRotate, handleNavRotate, setNavRotate ] = useToggle(false)
    const [ bgAnimate, handleBGAnimate, setBGAnimate ] = useToggle(false)

    const toggleDarkMode = () => {
        setDarkMode((prev: boolean) => !prev)
    }

    useEffect(() => {
        
        setBGAnimate(true)  
      
    }, [ menuToggle ])
    
    useEffect(() => {

        if(bgAnimate) {
            setTimeout(() => {
                setBGAnimate(false)
            }, 1000)  
        }

    }, [ bgAnimate ])


  return <GeneralContext.Provider value={{ height,  width, menuToggle, handleToggle, setMenuToggle, darkMode, toggleDarkMode, navRotate, handleNavRotate, setNavRotate, bgAnimate, handleBGAnimate, setBGAnimate }}>

            {children}

        </GeneralContext.Provider>
}

export const useGeneralContext = () => useContext(GeneralContext)