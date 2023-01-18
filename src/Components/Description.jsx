import React from 'react'

import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Description = () => {
  return (
    <div className='flex h-full flex-col items-center justify-between gap-5 text-center'>
      <h2 className='text-center text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl'>
        Ivan Bongiovanni
      </h2>
      <h3 className=' text-2xl dark:text-white md:text-3xl'>Full Stack Developer.</h3>
      <p className='mx-auto max-w-xl px-5 text-sm font-light leading-8 text-gray-800 dark:text-gray-200 md:text-xl'>
        Freelancer providing services for programming and design content needs. Join me down below
        and let's get cracking!
      </p>
      <div className='flex items-center justify-center gap-16  '>
        <a
          href=''
          className='text-4xl text-gray-600 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-400'
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href=''
          className='text-4xl text-gray-600 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-400'
        >
          <AiFillGithub />
        </a>
        <a
          href=''
          className='text-4xl text-gray-600 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-400'
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Description
