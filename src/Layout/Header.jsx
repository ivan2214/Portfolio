import React from 'react'
import NavBar from '@/Components/NavBar'

const Header = () => {
  return (
    <header className='flex w-full  flex-row justify-end shadow-2xl   dark:shadow-2xl md:dark:bg-slate-800'>
      <NavBar />
    </header>
  )
}

export default Header
