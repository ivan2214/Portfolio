// import images

import ecommerceStrapi from '@/Assets/Projects/ecommerceStrapi.png'
import candyShop from '@/Assets/Projects/candyShop.png'
import pokemon from '@/Assets/Projects/pokemon.png'
import chatBot from '@/Assets/Projects/chatBot.png'
import peliculas from '@/Assets/Projects/peliculas.png'
import todolist from '@/Assets/Projects/todolist.png'

/* icons */
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
import iconExpress from '@/Assets/icons/express/express-original.svg'
import iconGraphql from '@/Assets/icons/graphql/graphql-plain.svg'
import iconMongoDB from '@/Assets/icons/mongodb/mongodb-original.svg'
import iconPosgreSQL from '@/Assets/icons/postgresql/postgresql-original.svg'
import iconSequelize from '@/Assets/icons/sequelize/sequelize-original.svg'
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
        title: 'Ecommerce Tech',
        review:
          'Ecommerce Creado Con Strapi,React,TailwindCSS donde al finalizar la compra lo redirije a WhatsApp para terminar el pago',
        img: ecommerceStrapi,
        tecnology: [iconReact, iconReact, iconReact, iconReact, iconRedux, iconRedux, iconRedux],
        github: 'https://github.com/ivan2214/EcommerceFront',
        deploy: 'https://ecommerce-front-mu.vercel.app',
      },
      {
        title: 'CandyShop Ecommerce',
        review:
          'Ecommerce Realizado en conjunto con un equipo de devs en henry. Cuenta con funcionalidades de autenticacion, pasarela de pagos, panel de admin, etc',
        img: candyShop,
        tecnology: [iconReact, iconReact, iconReact, iconReact, iconRedux, iconRedux, iconRedux],
        github: 'https://github.com/AntonelaRodriguez/CandyShop',
        deploy: 'https://candy-shop-sage.vercel.app',
      },
      {
        title: 'Crud Pokemon',
        review:
          'Aplicacion fullStack capaz de realizar un CRUD completo, filtros de busqueda y ordenamiento. Proyecto individual realizado con express, posgreSQL, sequelize, React, Redux ',
        img: pokemon,
        tecnology: [iconReact, iconReact, iconReact, iconReact, iconRedux, iconRedux, iconRedux],
        github: 'https://github.com/ivan2214/Pokemon-FullStack',
        deploy: 'https://candy-shop-sage.vercel.app',
      },
      {
        title: 'ChatBot Simple',
        review:
          'Chat bot simple capaz de reconocer frases de un usuario tipico para atencion al cliente. Fue realizado con Natural para su entrenamiento. Esta realizado en React y Express  ',
        img: chatBot,
        tecnology: [iconReact, iconReact, iconReact, iconReact, iconRedux, iconRedux, iconRedux],
        github: 'https://github.com/ivan2214/ChatBot-Front',
        deploy: 'https://chat-bot-front.vercel.app',
      },
      {
        title: 'App De Peliculas',
        review:
          'Aplicacion de peliculas capaz de hacer match por nombre de pelicula. Cuenta con paginado simple. Realizada en React y Chakra',
        img: peliculas,
        tecnology: [iconReact, iconReact, iconReact, iconReact, iconRedux, iconRedux, iconRedux],
        github: 'https://github.com/ivan2214/App-De-Pelis',
        deploy: 'https://app-de-pelis.netlify.app',
      },
      {
        title: 'Lista de tareas',
        review:
          'Lista de tareas Capaz de persistir en LocalStorage, tachado de tareas realizadas y elimnacion de las mismas. Realizada en React',
        img: todolist,
        tecnology: [iconReact, iconReact, iconReact, iconReact, iconRedux, iconRedux, iconRedux],
        github: 'https://github.com/ivan2214/Todo-List',
        deploy: 'https://tareas-ivan.netlify.app',
      },
    ],
    skills: [
      { stack: 'Front End', name: 'react', img: iconReact },
      { stack: 'Front End', name: 'Redux', img: iconRedux },
      { stack: 'Back End', name: 'Express', img: iconExpress },
      { stack: 'Back End', name: 'NodeJs', img: iconNodeJs },
      { stack: 'Back End', name: 'MongoDB', img: iconMongoDB },
      { stack: 'Back End', name: 'Graphql', img: iconGraphql },
      { stack: 'Back End', name: 'posgreSQL', img: iconPosgreSQL },
      { stack: 'Back End', name: 'sequelize', img: iconSequelize },
      { stack: 'Front End', name: 'css', img: iconCss },
      { stack: 'Front End', name: 'vite', img: iconVite },
      { stack: 'Front End', name: 'tailwindCSS', img: iconTailwindCSS },
    ],
  },
}
