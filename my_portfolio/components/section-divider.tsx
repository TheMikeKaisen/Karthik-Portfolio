"use client"
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
        className="bg-gray-200 my-14 h-20 w-1 rounded-full"
        initial={{y:100, opacity:0}} 
        animate={{y:0, opacity:1}} 
        transition={{delay:0.15}}
    >
    </motion.div>
      
  )
}

export default SectionDivider
