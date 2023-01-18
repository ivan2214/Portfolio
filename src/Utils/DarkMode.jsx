import React, { useEffect, useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
export const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const element = document.documentElement

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        window.localStorage.setItem('theme', 'dark')
        break
      case 'light':
        element.classList.remove('dark')
        window.localStorage.setItem('theme', 'light')
        break

      default:
        window.localStorage.removeItem('theme')
        break
    }
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`transition-all duration-500  ${
        theme === 'dark' ? 'text-white' : 'text-gray-700'
      }`}
    >
      <BsFillMoonStarsFill size={20} />
    </button>
  )
}
