import React from 'react'
import NavBar from '@/Components/NavBar'

const Header = () => {
  return (
    <header className='w-full bg-slate-500 dark:bg-slate-700 flex flex-row justify-end shadow-lg'>
      <NavBar />
    </header>
  )
}

export default Header
