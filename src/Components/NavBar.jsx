import React from 'react'
import { DarkMode } from '@/Utils/DarkMode'

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
    <nav className='flex w-full gap-10 items-center justify-between px-10 py-3'>
      logo
      <section className='flex w-full gap-10 items-center justify-end'>
        <ul className='flex items-center gap-5 justify-center'>
          {links.map((l) => (
            <li className={'text-gray-200 hover:text-gray-300 text-lg'}>
              <a href={l.href}>{l.tittle}</a>
            </li>
          ))}
        </ul>
        <DarkMode />
      </section>
    </nav>
  )
}

export default NavBar
