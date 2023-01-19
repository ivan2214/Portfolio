import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const UpArrow = () => {
  return (
    <a
      href='#'
      className='fixed right-10 bottom-10 z-50 flex  h-12     w-12  cursor-pointer    items-center justify-center rounded-full dark:bg-teal-500  lg:h-8 lg:w-8'
    >
      <AiOutlineArrowUp className='m-auto' />
    </a>
  )
}

export default UpArrow
