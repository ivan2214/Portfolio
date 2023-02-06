import { content } from '../Content'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('Front End')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [filterWork, setFilterWork] = useState([])

  const { Testimonials } = content
  const { skills } = Testimonials

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])

      if (item === '') {
        setFilterWork([...skills])
      } else {
        setFilterWork(skills.filter((skill) => skill.stack.includes(item)))
      }
    }, 500)
  }

  useEffect(() => {
    setFilterWork(skills.filter((skill) => skill.stack.includes(activeFilter)))
  }, [])

  return (
    <section className='mt-16 h-full w-full' id='projects'>
      <h2 className='px-10 text-left text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl'>
        Skills
      </h2>
      <section className='mx-auto flex w-full gap-5 py-5 px-6 text-white'>
        {['Front End', 'Back End'].map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleWorkFilter(item)}
            className={`cursor-pointer rounded-2xl bg-slate-500 px-5 ${
              activeFilter === item ? 'bg-slate-800' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </section>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 px-5 py-5 text-white'
      >
        {filterWork.map((s, idx) => (
          <motion.div
            transition={{ duration: 1.5, delayChildren: idx * 0.5 }}
            className={'flex w-full items-center justify-center gap-5 rounded-lg bg-slate-700'}
          >
            <img src={s.img} className='max-h-[50px] max-w-xs' alt='' />
            <p className='text-center'>{s.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
