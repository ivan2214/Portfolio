import React from 'react'

import cartonfy from '@/Assets/Cartoonify.png'
import Description from '@/Components/Description'

const Hero = () => {
  return (
    <section className=' flex h-full min-h-screen w-full flex-col items-center  justify-center gap-10 dark:bg-slate-900 lg:flex-row  lg:justify-between'>
      <Description />
      <div className='relative mx-auto  h-24 w-24 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-24 md:w-24'>
        <img src={cartonfy} className='fill-current object-cover' />
      </div>
    </section>
  )
}

export default Hero
