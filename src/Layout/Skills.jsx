import { content } from '../Content'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { TfiWorld } from 'react-icons/tfi'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Skills = () => {
  const { Testimonials } = content
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <section className='mt-16 h-full w-full' id='projects'>
      <h2 className='px-10 text-left text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl'>
        Skills
      </h2>
      <div className='px-5 pt-14 md:container'>
        <Swiper
          direction={'horizontal'}
          pagination={{
            clickable: true,
          }}
          data-aos='fade-up'
          loop={true}
          spaceBetween={10}
          slidesPerView={2}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex)
          }}
          modules={[Pagination]}
          className='w-full '
        >
          {Testimonials?.skills?.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`flex h-full w-full flex-col items-center justify-center gap-6 overflow-hidden
              rounded-2xl  bg-teal-700 text-gray-200 duration-500 dark:bg-gray-800
               dark:text-gray-300 md:flex-row 
                `}
              >
                <div className='flex h-full flex-col items-center  justify-center py-5 '>
                  <img
                    src={content?.img}
                    alt='...'
                    className='aspect-[16/6] w-full  object-contain md:aspect-[16/18]  md:rounded-2xl lg:aspect-[16/4] lg:rounded-2xl 2xl:max-h-[30px]'
                  />
                </div>
                <div className='flex flex-col items-start justify-center gap-5 p-5 text-left '>
                  <h2 className='text-xl font-bold capitalize lg:text-2xl'>{content?.name}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Skills
