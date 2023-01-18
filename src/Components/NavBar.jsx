import React from 'react'
import { DarkMode } from '@/Utils/DarkMode'
import { FiCode } from 'react-icons/fi'
import cv from '@/Assets/Bongiovanni Ivan Cv.pdf'

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
  return (
    <nav className='flex  w-full  items-center justify-between gap-10 px-4 py-3'>
      <a className='w-fit dark:text-white' href='#'>
        <FiCode size={30} />
      </a>
      <section className='flex items-center justify-end gap-1'>
        <ul className='flex w-full flex-row items-center justify-center gap-5   lg:flex-row'>
          <li
            className={
              'text ml-8 rounded-md border-none bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white'
            }
          >
            <a href={cv} download='CV IvanBongiovanni'>
              Curriculum
            </a>
          </li>
          <DarkMode />
        </ul>
      </section>
    </nav>
  )
}

export default NavBar
