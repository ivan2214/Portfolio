// import images

import peliculas from '@/Assets/Projects/peliculas.png'
import todolist from '@/Assets/Projects/todolist.png'
import spaceX from '@/Assets/Projects/spaceX.png'
/* import react from '@/Assets/skills/react.png'
import redux from '@/Assets/skills/redux.png'
import chakra from '@/Assets/skills/chakra.png'
import tailwind from '@/Assets/skills/tailwind.png'
import express from '@/Assets/skills/express.png'
import mongo from '@/Assets/skills/mongo.png'
import postgre from '@/Assets/skills/postgre.png'
import mongoose from '@/Assets/skills/mongoose.png'
import sequlize from '@/Assets/skills/sequlize.png' */
import iconHtml from '@/Assets/icons/html5/html5-original.svg'
import iconCss from '@/Assets/icons/css3/css3-original.svg'
import iconJs from '@/Assets/icons/javascript/javascript-original.svg'
import iconReact from '@/Assets/icons/react/react-original.svg'
import iconRedux from '@/Assets/icons/redux/redux-original.svg'
import iconBootstrap from '@/Assets/icons/bootstrap/bootstrap-original.svg'
/* import iconChakraIu from "@/Assets/icons/chakraIu/chakraIu-original.svg"; */
import iconTailwindCSS from '@/Assets/icons/tailwindcss/tailwindcss-plain.svg'
import iconWordpess from '@/Assets/icons/wordpress/wordpress-plain.svg'
import iconNpm from '@/Assets/icons/npm/npm-original-wordmark.svg'
import iconNodeJs from '@/Assets/icons/nodejs/nodejs-original.svg'
import iconGit from '@/Assets/icons/git/git-original.svg'
import iconGitHub from '@/Assets/icons/github/github-original.svg'
import iconFigma from '@/Assets/icons/figma/figma-original.svg'
import iconVite from '@/Assets/icons/vite/vitejs.svg'

export const content = {
  Testimonials: {
    title: 'Testimonials',
    subtitle: 'MY CLIENT REVIEWS',
    testimonials_content: [
      {
        title: 'App De Peliculas',
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra,”',
        img: peliculas,
        tecnology: [iconReact,iconReact,iconReact,iconReact,iconRedux,iconRedux,iconRedux],
      },
      {
        title: 'Lista de tareas',
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: todolist,
          tecnology: [iconReact,iconReact,iconReact,iconReact,iconRedux,iconRedux,iconRedux],
      },
      {
        title: 'SpaceX',
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: spaceX,
        tecnology: [iconReact,iconReact,iconReact,iconReact,iconRedux,iconRedux,iconRedux],
      },
    ],
  },
}
