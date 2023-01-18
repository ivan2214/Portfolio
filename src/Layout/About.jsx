import React from 'react'
import { FaServer } from 'react-icons/fa'
import { BsServer, BsFillPaletteFill } from 'react-icons/bs'

const About = () => {
  return (
    <section>
      <div>
        <h3 className='py-1 text-3xl dark:text-white '>Services I offer</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Since the beginning of my journey as a freelance designer and developer, I've done remote
          work for
          <span className='text-teal-500'> agencies </span>
          consulted for <span className='text-teal-500'>startups </span>
          and collaborated with talanted people to create digital products for both business and
          consumer use.
        </p>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          I offer from a wide range of services, including brand design, programming and teaching.
        </p>
      </div>
      <div className='gap-10 lg:flex'>
        <div className='my-10 flex-1 rounded-xl p-10 text-center  shadow-lg dark:bg-white'>
          <FaServer size={30} className='m-auto' />
          <h3 className='pt-8 pb-2 text-lg font-medium  '>Beautiful Designs</h3>
          <p className='py-2'>
            Creating elegant designs suited for your needs following core design theory.
          </p>
          <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
          <p className='py-1 text-gray-800'>Photoshop</p>
          <p className='py-1 text-gray-800'>Illustrator</p>
          <p className='py-1 text-gray-800'>Figma</p>
          <p className='py-1 text-gray-800'>Indesign</p>
        </div>
        <div className='my-10 flex-1 rounded-xl p-10 text-center shadow-lg dark:bg-white'>
          <BsServer size={30} className='m-auto' />
          <h3 className='pt-8 pb-2 text-lg font-medium '>Codifica el proyecto de tus sueños</h3>
          <p className='py-2'>
          ¿Tienes una idea para tu próximo gran sitio web? Hagámoslo realidad.
          </p>
          <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
          <p className='py-1 text-gray-800'>Photoshop</p>
          <p className='py-1 text-gray-800'>Illustrator</p>
          <p className='py-1 text-gray-800'>Figma</p>
          <p className='py-1 text-gray-800'>Indesign</p>
        </div>
        <div className='my-10 flex-1 rounded-xl p-10 text-center shadow-lg dark:bg-white'>
          <BsFillPaletteFill size={30} className='m-auto' />
          <h3 className='pt-8 pb-2 text-lg font-medium '>Consulting</h3>
          <p className='py-2'>
            Are you interested in feedback for your current project? I can give you tips and tricks
            to level it up.
          </p>
          <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
          <p className='py-1 text-gray-800'>Photoshop</p>
          <p className='py-1 text-gray-800'>Illustrator</p>
          <p className='py-1 text-gray-800'>Figma</p>
          <p className='py-1 text-gray-800'>Indesign</p>
        </div>
      </div>
    </section>
  )
}

export default About
