import { content } from '../Content'

import { motion } from 'framer-motion'

const Skills = () => {
  const { Testimonials } = content

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  return (
    <section className='mt-16 h-full w-full' id='projects'>
      <h2 className='px-10 text-left text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl'>
        Skills
      </h2>
      <motion.ul
        initial='hidden'
        animate='visible'
        variants={list}
        className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 px-5 py-5 text-white'
      >
        {Testimonials?.skills?.map((content, i) => (
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, variants: { item } }}
            transition={{ duration: 1, when: 'beforeChildren', delay: i * 0.3, }}
            viewport={{ once: true, }}
            className={'flex w-full items-center justify-center gap-5 rounded-lg bg-slate-700'}
          >
            <img src={content.img} className='max-h-[50px] max-w-xs' alt='' />
            <p className='text-center'>{content.name}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default Skills
