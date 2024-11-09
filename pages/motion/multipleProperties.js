import React from 'react'
import {motion} from 'framer-motion'
const multipleProperties = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      <h1>With Easing</h1>
    </motion.div>
  )
}

export default multipleProperties