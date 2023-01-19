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

const Projects = () => {
  const { Testimonials } = content
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <section className='mt-16 h-full w-full' id='projects'>
      <h2 className='px-10 text-left text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl'>
        Proyectos
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
          slidesPerView={1.5}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex)
          }}
          modules={[Pagination]}
          className='w-full '
        >
          {Testimonials?.testimonials_content?.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`flex h-full w-full flex-col items-center justify-center gap-6 overflow-hidden
              rounded-2xl  bg-teal-700 text-gray-200 duration-500 dark:bg-gray-800
               dark:text-gray-300 md:flex-row lg:p-8
                ${activeIndex !== i && 'translate-y-16 scale-75 blur-sm'}`}
              >
                <div className='flex h-full flex-col  items-center justify-center gap-10 '>
                  <img
                    src={content?.img}
                    alt='...'
                    className='w-full  object-contain md:aspect-[16/18]  md:rounded-2xl lg:aspect-[16/6] lg:rounded-2xl 2xl:max-h-[500px]'
                  />
                  <div className='flex flex-row items-center justify-center gap-5'>
                    <a
                      href={content?.github}
                      target='_blank'
                      className='text-gray-600 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-400'
                    >
                      <AiFillGithub className='h-7 w-7' />
                    </a>
                    <a
                      href={content?.deploy}
                      target='_blank'
                      className='text-gray-600 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-400'
                    >
                      <TfiWorld className='h-7 w-7' />
                    </a>
                  </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-5 p-5 text-left '>
                  <h2 className='text-xl font-bold lg:text-2xl'>{content.title}</h2>
                  <p className='text-sm font-light lg:text-base '>{content.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Projects
