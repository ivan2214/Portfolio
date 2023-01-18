import React from 'react'

const Footer = () => {
  return (
    <footer className='flex w-full flex-row  items-center justify-center gap-5 bg-white px-10 py-5 shadow-2xl   dark:bg-slate-900 dark:shadow-2xl md:px-20 lg:px-28'>
      <p className='w-full font-bold dark:text-teal-600 lg:w-auto lg:text-2xl'>Ivan Bongiovani</p>
      <p className='w-full font-light dark:text-gray-100 lg:w-auto lg:text-xl'>
        © All CopyRights Reserved 2022
      </p>
    </footer>
  )
}

export default Footer
