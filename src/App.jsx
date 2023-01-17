import About from '@/Layout/About'
import Contact from '@/Layout/Contact'
import Header from '@/Layout/Header'
import Hero from '@/Layout/Hero'
import Projects from '@/Layout/Projects'

function App() {
  return (
    <main className='bg-white transition-all duration-500 ease-in   dark:bg-slate-800 w-full min-h-screen flex items-center flex-col'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
