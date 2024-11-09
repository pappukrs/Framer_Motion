import React from 'react'
import { motion } from 'framer-motion'


const basic = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 7}}
    >
      <h1>Hello, Framer Motion!</h1>
    </motion.div>
  )
}

export default basic