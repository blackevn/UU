'use client'

interface AccordionProps {
    title: string
    desc: string
    defaultChecked?: boolean
}

const Accordion: React.FC<AccordionProps> = ({title, desc, defaultChecked}) => {
  return (
    <div>
        <div className="collapse bg-gray-200 text-black">
        <input type="radio" name="my-accordion-1" defaultChecked={defaultChecked} /> 
        <div className="collapse-title text-xl font-medium">
            {title}
        </div>
        <div className="collapse-content bg-gray-400 rounded-lg p-4"> 
            <p>{desc}</p>
        </div>
        </div>
    </div>
  )
}

export default Accordion