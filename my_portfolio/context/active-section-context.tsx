"use client"
import { links } from '@/lib/data';
import type { SectionName } from '@/lib/types';
import React, { createContext, useContext, useState } from 'react'



type ActiveSectionContextType = {
    activeSection: SectionName, 
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)
 

const ActiveSectionContextProvider = (
    {children}:{children:React.ReactNode}
) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider value={{
        activeSection, 
        setActiveSection, 
        timeOfLastClick, 
        setTimeOfLastClick
    }}>
        {children}

    </ActiveSectionContext.Provider>

  )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)

    if(context === null) {
        throw new Error(
            "UseActiveSectionContext must be used within an ActiveSectionContextProvider"
        )
    }
    return context;
}

export default ActiveSectionContextProvider
