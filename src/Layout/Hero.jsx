import React from 'react'
import Description from '@/Components/Description'
import Avatar from '@/Components/Avatar'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Hero = () => {
  return (
    <section className='relative flex h-full min-h-screen w-full flex-col items-center  justify-center gap-10  lg:flex-row  lg:justify-between'>
      <Description />
      <Avatar />
      <a href='#about'>
        <AiOutlineArrowDown className='absolute left-[41%] top-[78%] h-10 w-10 translate-x-[50%] translate-y-[50%] animate-pulse text-teal-600 dark:text-teal-300 transition-all duration-500 lg:left-[50%] ' />
      </a>
    </section>
  )
}

export default Hero
