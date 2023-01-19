import About from '@/Layout/About'
import Contact from '@/Layout/Contact'
import Header from '@/Layout/Header'
import Hero from '@/Layout/Hero'
import Projects from '@/Layout/Projects'
import Footer from '@/Layout/Footer'
import Skills from './Layout/Skills'

function App() {
  return (
    <main className='flex min-h-screen w-full  flex-col  items-center overflow-hidden  bg-white transition-all duration-500 dark:bg-slate-900 md:px-20 lg:px-40'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
