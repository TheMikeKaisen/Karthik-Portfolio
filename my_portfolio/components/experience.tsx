"use client"
import React, { useContext } from 'react'
import SectionHeading from './section-heading'

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { educationData } from '@/lib/data'
import useSectionInView from '@/lib/hooks'
import { useTheme } from '@/context/theme-context'

const Education = () => {
    const {ref} = useSectionInView('Education')
    const {theme} = useTheme();
  return (
    <section ref={ref} id="experience" className='scroll-mt-28 mb-28 sm:mb-40'>

    <SectionHeading>
      Education
    </SectionHeading>
    <VerticalTimeline lineColor=''>
        {educationData.map((item, index) => (
            <React.Fragment key={index}>
                <VerticalTimelineElement
                visible={true}
                    contentStyle={{
                        background:theme === "light" ? "#f3f4f6": "rgba(255, 255, 255, 0.05)", 
                        boxShadow: "none", 
                        border: "1px solid rgba(0, 0, 0, 0.05)", 
                        textAlign: "left", 
                        padding: "1.3rem 2rem", 
                        color: theme === 'light'? "rgba(255, 255, 255, 0.05)" :"#f3f4f6"
                        
                    }}
                    contentArrowStyle={{
                        borderRight: "0.4rem solid #9ca3af"
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                        background: theme === 'light'?"white": "rgba(255, 255, 255, 0.2)", 
                        fontSize: "1.5rem"
                    }}
                >
                    <h3 className='font-semibold capitalize dark:text-gray-200'>{item.title}</h3>
                    <p className='font-normal !mt-0 dark:text-gray-200'>{item.location}</p>
                    <p className='!mt-2 !font-normal text-gray-700 dark:text-gray-400'>{item.description}</p>
                </VerticalTimelineElement>
            </React.Fragment>
        ))}
    </VerticalTimeline>
    </section>
  )
}

export default Education
