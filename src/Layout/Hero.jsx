import React from 'react'
import Description from '@/Components/Description'
import Avatar from '@/Components/Avatar'

const Hero = () => {
  return (
    <section className=' flex h-full min-h-screen w-full flex-col items-center  justify-center gap-10  lg:flex-row  lg:justify-between'>
      <Description />
      <Avatar />
    </section>
  )
}

export default Hero
