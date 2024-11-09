import React from 'react'
import {motion} from 'framer-motion'
const multipleProperties = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: -100, y: -50 }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      transition={{ duration: 2 }}
    >
      <h1>Multiple Properties Animation</h1>
    </motion.div>
  )
}

export default multipleProperties