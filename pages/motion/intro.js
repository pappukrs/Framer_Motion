import React from 'react'
import { motion } from 'framer-motion'

const intro = () => {
  return (
    <motion.div
    initial={{ y: -100, opacity: 0,scale:0.5 }}
    animate={{ y: 0, opacity: 1 ,scale:1}}
    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
  >
    <h1>Animation with Delay and Ease Out</h1>
  </motion.div>
  )
}

export default intro