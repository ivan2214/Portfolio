import React, { useEffect, useState } from 'react'

export const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const element = document.documentElement
  const options = [
    {
      icon: 'sunny',
      text: 'light',
    },
    {
      icon: 'moon',
      text: 'dark',
    },
  ]

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
    <div>
      {options.map((e) => {
        return (
          <button
            onClick={() => setTheme(e.text)}
            key={e.text}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 transition-all duration-500 ${
              theme === e.text ? 'text-sky-600' : 'text-gray-900 dark:text-white'
            }`}
          >
            <ion-icon name={e.icon}></ion-icon>
          </button>
        )
      })}
    </div>
  )
}
