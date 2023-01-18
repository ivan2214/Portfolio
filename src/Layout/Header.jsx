import React from 'react'
import NavBar from '@/Components/NavBar'

const Header = () => {
  return (
    <header className='max-w-screen-2xl flex w-full flex-row justify-end bg-gray-200 shadow-2xl dark:bg-slate-800'>
      <NavBar />
    </header>
  )
}

export default Header
