import React from 'react'

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

const Description = () => {
  return (
    <div className='flex h-full flex-col items-center justify-between gap-5 text-center'>
      <h2 className='text-center text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl'>
        Ivan Bongiovanni
      </h2>
      <h3 className=' text-2xl dark:text-white md:text-3xl'>Full Stack Developer.</h3>
      <p className='mx-auto max-w-xl px-5 text-sm font-light leading-8 text-gray-800 dark:text-gray-200 md:text-xl'>
        Un Dev amante del Rocket League y curioso por el espacio 🚀🚗
      </p>
      <div className='flex items-center justify-center gap-16  '>
        <a
          href='mailto:bongiovanniivan12@gmail.com?Subject=Me%20contacto%20por%20medio%20tu%20portafolio%20y%20quisiera%20poder%20establecer%20una%20charla%20contigo'
          target='_blank'
          className='text-4xl text-gray-600 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-400'
        >
          <SiGmail />
        </a>
        <a
          href='https://github.com/ivan2214'
          target='_blank'
          className='text-4xl text-gray-600 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-400'
        >
          <AiFillGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/bongiovanni-ivan45'
          target='_blank'
          className='text-4xl text-gray-600 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-400'
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Description
