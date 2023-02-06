import React from 'react'
import Description from '@/Components/Description'
import Avatar from '@/Components/Avatar'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className='flex h-full min-h-screen w-full flex-col items-center  justify-center gap-10  lg:flex-row  lg:justify-between'
    >
      <Description />
      <Avatar />
    </motion.section>
  )
}

export default Hero
