import React from 'react'
import cartonfy from '@/Assets/Cartoonify.png'

const Avatar = () => {
  return (
    <div className=' mx-auto h-24 w-24  overflow-hidden rounded-full bg-gradient-to-b from-teal-500 shadow-2xl dark:shadow-2xl md:h-24 md:w-24'>
      <img src={cartonfy} className='fill-current object-cover shadow-2xl dark:shadow-2xl ' />
    </div>
  )
}

export default Avatar
