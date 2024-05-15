import { IconType } from "react-icons"
import { FaIcons } from "react-icons/fa"

interface ToggleProps {
    icon?: IconType
    toggleEvent: () => void
    on: IconType
    off: IconType
    modifier: string
    modifier1: string
    modifier2: string
    checked: boolean
    placeholder: string
}

const Toggle: React.FC<ToggleProps> = (props) => {

    const {toggleEvent, on: On, off: Off, modifier, modifier1, modifier2, checked = false, placeholder, icon: Icon} = props
           
return (

        <>
            
            <label className={`swap swap-rotate ${modifier}`}>
            
            <input placeholder={placeholder} type="checkbox" checked={checked} onChange={toggleEvent}/>

            <div className={`swap-on fill-current text-2xl ${modifier1} grid place-items-center`}><Off/></div>
            <div className={`swap-off fill-current text-2xl ${modifier2} grid place-items-center`}><On/></div>
            
            </label>
            
        </>

    )
}


export default Toggle