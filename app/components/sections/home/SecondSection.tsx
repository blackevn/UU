import React from 'react'
import Accordion from '../../Accordion'

const SecondSection = () => {

    const leftSide = [
        {
            title: "Comprehensive Analysis",
            desc:   "Our team conducts an in-depth analysis of your current social media performance to identify areas of improvement."
        },
        {
            title: "Customized Strategies",
            desc:  "We develop bespoke marketing plans that align with your business goals and resonate with your audience."
        },
        {
            title: "Continuous Support",
            desc:  "Our dedicated team provides ongoing support to ensure sustained growth and engagement on all platforms."
        },
    ]

  return (
    <div className='w-full p-8 flex bg-white dark:bg-black text-black dark:text-white min-h-[400px]'>
        <div className='lg:w-1/2'>
            <div>
                <h1 className='text-4xl font-bold'>Transform Your Business with Our Expertise</h1>
                <p>At Unicorn Universal, we specialize in elevating your brand's presence on social media. Our tailored strategies ensure your business stands out and reaches its target audience effectively.</p>
            </div>
            <div className='space-y-2'>
                {leftSide.map((item, index) => (<Accordion title={item.title} desc={item.desc}  defaultChecked={index === 0}  key={index} />))}
            </div>
        </div>
        <div className='lg:w-1/2'></div>
    </div>
  )
}

export default SecondSection