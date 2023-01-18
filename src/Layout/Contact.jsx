import React from 'react'
import { AiFillLinkedin, AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

const Contact = () => {
  return (
    <section className='mt-16 flex h-full w-full flex-col  items-start justify-center gap-2'>
      <h2 className='px-10 text-left text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl'>
        Contactemos!
      </h2>
      <section className='flex h-full w-full flex-col-reverse flex-wrap justify-center  lg:flex-row lg:gap-5'>
        <section className='w-full rounded-2xl p-10 lg:w-[50%]'>
          <form>
            <section className=' flex flex-col items-start justify-center gap-5'>
              <input
                className=' w-full rounded-md border  bg-gray-800 p-3 text-gray-300 placeholder:text-gray-100 focus:border-teal-500  '
                type='text'
                placeholder='Nombre'
              />
              <input
                className=' w-full rounded-md border  bg-gray-800 p-3 text-gray-300 placeholder:text-gray-100 focus:border-teal-500  '
                type='email'
                placeholder='Email'
              />
              <textarea
                className=' w-full resize-none rounded-md border   bg-gray-800 p-5 text-gray-300 placeholder:text-gray-100 focus:border-teal-500  '
                name=''
                draggable='false'
                resize='false'
                placeholder='Mensaje'
                id=''
                cols='10'
                rows='10'
              ></textarea>
            </section>
          </form>
        </section>
        <section className='flex  flex-col items-start justify-center gap-10  p-10 '>
          <a
            href='https://github.com/ivan2214'
            target='_blank'
            className='flex flex-row items-center justify-center gap-5 p-5'
          >
            <AiFillGithub className='h-10 w-10 cursor-pointer rounded-2xl shadow-xl transition-all  duration-300 dark:text-gray-300 hover:dark:text-teal-600' />
            <p className='text-xl text-gray-300 hover:dark:text-teal-600'>ivan2214</p>
          </a>
          <a
            href='https://www.linkedin.com/in/bongiovanni-ivan45'
            target='_blank'
            className='flex flex-row items-center justify-center gap-5 p-5'
          >
            <AiFillLinkedin className='h-10 w-10 cursor-pointer rounded-2xl shadow-xl transition-all  duration-300 dark:text-gray-300 hover:dark:text-teal-600' />
            <p className='text-xl text-gray-300 hover:dark:text-teal-600'>LinkedIn</p>
          </a>
          <a
            href='https://walink.co/74213e'
            className='flex flex-row items-center justify-center gap-5 p-5'
          >
            <AiOutlineWhatsApp className='h-10 w-10 cursor-pointer rounded-2xl shadow-xl transition-all  duration-300 dark:text-gray-300 hover:dark:text-teal-600' />
            <p className='text-xl text-gray-300 hover:dark:text-teal-600'>+54 3812516597</p>
          </a>
          <a
            href='mailto:bongiovanniivan12@gmail.com?Subject=Me%20contacto%20por%20medio%20tu%20portafolio%20y%20quisiera%20poder%20establecer%20una%20charla%20contigo'
            target='_blank'
            className='flex flex-row items-center justify-center gap-5 p-5'
          >
            <SiGmail className='h-10 w-10 cursor-pointer rounded-2xl shadow-xl transition-all  duration-300 dark:text-gray-300 hover:dark:text-teal-600' />
            <p className='text-xl text-gray-300 hover:dark:text-teal-600'>Email</p>
          </a>
        </section>
      </section>
    </section>
  )
}

export default Contact
