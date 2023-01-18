import React from 'react'
import NavBar from '@/Components/NavBar'

const Header = () => {
  return (
    <header className='fixed top-0 flex w-full flex-row  justify-end bg-white shadow-2xl dark:bg-slate-900   dark:shadow-2xl md:px-20 lg:px-28'>
      <NavBar />
    </header>
  )
}

export default Header
