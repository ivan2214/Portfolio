import React from 'react'
import { DarkMode } from '@/Utils/DarkMode'
import { FiCode } from 'react-icons/fi'
import cv from '@/Assets/Bongiovanni Ivan Cv.pdf'
import { motion } from 'framer-motion'

const NavBar = () => {
  const links = [
    {
      href: '#sobremi',
      tittle: 'Sobre Mi',
    },
    {
      href: '#proyectos',
      tittle: 'Proyectos',
    },
    {
      href: '#contacto',
      tittle: 'Contacto',
    },
  ]

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  return (
    <nav className='flex  w-full  items-center justify-between gap-10 px-4 py-3'>
      <motion.ul
        initial='hidden'
        animate='visible'
        variants={list}
        className='flex w-full flex-row items-center justify-between gap-5  px-5 '
      >
        <motion.li
          variants={item}
          className={'rounded-md border-none bg-gradient-to-r from-cyan-500 to-teal-500 text-white'}
        >
          <a
            className=' rounded-2xl border-none bg-gradient-to-r from-cyan-500 to-teal-500  text-center flex items-center  text-gray-300 dark:text-gray-900'
            href='#'
          >
            <FiCode size={30} />
          </a>
        </motion.li>
        <div  className='flex items-center justify-center gap-5'>
          <motion.li
            variants={item}
            className={
              'text ml-8 rounded-md border-none bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white'
            }
          >
            <a href={cv} download='CV IvanBongiovanni'>
              Curriculum
            </a>
          </motion.li>
          <motion.li variants={item}>
            <DarkMode />
          </motion.li>
        </div>
      </motion.ul>
    </nav>
  )
}

export default NavBar
