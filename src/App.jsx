import About from '@/Layout/About'
import Contact from '@/Layout/Contact'
import Header from '@/Layout/Header'
import Hero from '@/Layout/Hero'
import Projects from '@/Layout/Projects'

function App() {
  return (
    <main className='flex min-h-screen w-full  flex-col  items-center overflow-hidden bg-white transition-all duration-500 dark:bg-slate-800'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
