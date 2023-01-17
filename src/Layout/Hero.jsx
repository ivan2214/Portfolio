import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='h-[90vh] dark:bg-slate-900 flex w-full justify-center flex-col items-center gap-14'>
      <div className='flex items-center flex-col gap-5 justify-center'>
        <h1 className='text-2xl text-white'>Ivan Bongiovani</h1>
        <p className='text-lg text-white'>Full Stack Developer</p>
        <span className='text-md font-light text-gray-400'>Especializado En Stack PERN & MERN</span>
      </div>
      <a href='#about'>
        <FaArrowDown className='text-white w-7 h-7' />
      </a>
    </section>
  )
}

export default Hero
