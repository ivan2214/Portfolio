import React from 'react'
import NavBar from '@/Components/NavBar'

const Header = () => {
  return (
    <header className='fixed top-0 flex w-full flex-row  justify-end shadow-2xl dark:shadow-2xl bg-white  md:px-20 md:dark:bg-slate-800 lg:px-28'>
      <NavBar />
    </header>
  )
}

export default Header
