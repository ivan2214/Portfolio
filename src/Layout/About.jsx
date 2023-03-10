import React from 'react'
import { FaServer } from 'react-icons/fa'
import { BsServer, BsFillPaletteFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-20 px-10  ' id='about'>
      <section className='flex flex-col items-start justify-center text-left '>
        <h2 className='text-left text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl'>
          Servicios que ofrezco
        </h2>
        <p className='text-md py-2 text-left leading-8  text-gray-800 dark:text-gray-200 lg:pr-64'>
          Como <span className='text-teal-500'> desarrollador </span>, he aplicado mis habilidades
          en proyectos personales y colaboraciones con un equipo talentoso para crear aplicaciones
          web de alto rendimiento para uso comercial y de consumo. Ofrezco servicios especializados
          en desarrollo
          <span className='text-teal-500'> FrontEnd </span> y
          <span className='text-teal-500'> BackEnd </span>, con el objetivo de brindar soluciones
          innovadoras y eficientes a mis clientes.
        </p>
      </section>
      <section className='grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10  '>
        <motion.article
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='flex max-h-[470px] flex-col rounded-xl bg-teal-600 p-8 text-center text-white shadow-lg dark:bg-gray-800 dark:text-gray-200'
        >
          <BsFillPaletteFill className='mx-auto h-10 w-10' />

          <h3 className='pt-8 pb-2 text-lg font-medium '>FrontEnd</h3>
          <p className='py-2'>
            Como especialista en desarrollo FrontEnd, me esfuerzo por crear interfaces de usuario
            atractivas y fáciles de usar que se adapten a las necesidades específicas de cada
            proyecto.
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='flex max-h-[470px] flex-col rounded-xl bg-teal-600 p-8 text-center text-white shadow-lg dark:bg-gray-800 dark:text-gray-200 lg:mt-24'
        >
          <FaServer className='mx-auto h-10 w-10' />
          <h3 className='pt-8 pb-2 text-lg font-medium '>BackEnd</h3>
          <p className='py-2'>
            Como desarrollador back-end, puedo crear APIs REST y GraphQL utilizando Express y
            Apollo. Me especializo en crear soluciones robustas y escalables, asegurando la
            seguridad y estabilidad de las aplicaciones. Utilizo las últimas tecnologías y
            herramientas para ofrecer soluciones de alta calidad.
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='flex max-h-[470px] flex-col rounded-xl bg-teal-600 p-8 text-center text-white shadow-lg dark:bg-gray-800 dark:text-gray-200'
        >
          <BsServer className='mx-auto h-10 w-10' />
          <h3 className='pt-8 pb-2 text-lg font-medium '>Base de Datos</h3>
          <p className='py-2'>
            Como desarrollador back-end con experiencia en el uso de Mongoose y Sequelize, puedo
            conectar el servidor Express con una base de datos de manera eficiente y segura. Utilizo
            Mongoose con MongoDB, para definir esquemas de datos. Sequelize, para bases de datos
            relacionales, creacion de tablas relacciones y modelos
          </p>
        </motion.article>
      </section>
    </section>
  )
}

export default About
