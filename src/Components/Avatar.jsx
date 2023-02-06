import React from 'react'
import cartonfy from '@/Assets/Cartoonify.png'
import { motion } from 'framer-motion'

const Avatar = () => {
  return (
    <motion.div
      
      animate={{
        scale: [1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 270, 270, 0],
      }}
      transition={{  duration: 1.5 }}
      className=' mx-auto h-24 w-24  overflow-hidden rounded-full bg-gradient-to-b from-teal-500 shadow-2xl dark:shadow-2xl md:h-24 md:w-24'
    >
      <img
        src={cartonfy}
        loading='lazy'
        className='fill-current object-cover shadow-2xl dark:shadow-2xl '
        width='360'
        height='360'
      />
    </motion.div>
  )
}

export default Avatar
