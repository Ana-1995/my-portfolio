import React, { useEffect, useRef, useState } from 'react'
import Title from '../Title'
import plantshop from '../../assets/plantshop.jpg'
import bank from '../../assets/bank.jpg'
import coffee from '../../assets/coffeeshop.jpg'
import quiz from '../../assets/quiz.jpg'
import './projects.css'

const projectsData = [
  {
    id: 'project1',
    name: 'Plant Shop Website',
    img: plantshop,
    about:
      "'Green Space' is an e-commerce website developed using React.js. It serves as the front-end for an online plant shop, enabling users to browse, search, and purchase various plants. This project showcase my front-end development skills and is an integral part of my portfolio.",
    github: 'https://github.com/Ana-1995/PlantShop-App',
    live: 'https://plant-shop-app.vercel.app/',
  },
  {
    id: 'project2',
    name: 'Coffee Shop Website',
    img: coffee,
    about:
      "My Coffee Shop project showcases a fully responsive e-commerce website. This project brings together essential front-end functionalities, including a shopping cart, search, filters, sorting, and an intuitive user interface. It's providing a seamless virtual coffee shopping experience.",
    github: 'https://github.com/Ana-1995/online-bank',
    live: 'https://coffeeshop-delta.vercel.app/',
  },
  {
    id: 'project3',
    name: 'Quiz App',
    img: quiz,
    about:
      'Explore my interactive Quiz App, a web project that brings knowledge and fun together! Built with React.js and styled using Tailwind CSS, this app seamlessly integrates with the Trivia API. Choose your quiz category and difficulty level, select the number of questions, and answer the questions to receive instant feedback.',
    github: 'https://github.com/Ana-1995/quiz-app',
    live: 'https://quiz-app-three-peach.vercel.app/',
  },
  {
    id: 'project4',
    name: 'Online Bank App',
    img: bank,
    about:
      'I introduce my first JavaScript project, an Online Bank Application. I embarked on the journey of web development by crafting an online banking experience from scratch. I put my coding skills to the test. This project marked the beginning of my journey into the world of web development.',
    github: 'https://github.com/Ana-1995/online-bank',
  },
]

const Projects = () => {
  const [resetAnimation, setResetAnimation] = useState(false) 
  const animateRef=useRef(null)
  useEffect(()=>{
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.002,
      }
      const animateObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setResetAnimation(true)
            observer.unobserve(entry.target)
          }
        })
      }, options)
      if (animateRef.current) {
        animateObserver.observe(animateRef.current)
      }

      return () => {
        if (animateRef.current) {
          animateObserver.unobserve(animateRef.current)
        }
      }
  }, [])
  return (
    <section className='ml-0 lg:ml-52 mb-12 lg:mb-16' id='projects'>
      <Title title={'my projects'} />
      <div
        className={`flex flex-col lg:flex-row flex-wrap justify-center gap-x-6 lg:gap-x-20 gap-y-16 mt-4 lg:mt-8`}
      >
        {projectsData.map((project) => (
          <article
            key={project.id}
            className='flex flex-col w-full lg:w-[33%] rounded-lg pb-3 bg-[#434343] shadow-lg shadow-gray-600'
          >
            <img
              src={project.img}
              alt={project.name}
              className='w-full h-auto object-cover rounded-lg'
            />
            <h3 className='text-2xl lg:text-3xl text-yellow-200 font-mono tracking-wider pt-4 px-6 '>
              {project.name}
            </h3>
            <p className='pt-2 text-white md:text-xl lg:text-base px-6 text-justify'>
              {project.about}
            </p>
            <div className='flex flex-row justify-start items-center gap-x-4 mt-3 px-6'>
              <a
                href={project.github}
                className='text-slate-100 border-gray-400 py-2 px-3 rounded-md font-bold border-2 hover:text-black hover:bg-white duration-300'
                target='_blank'
                rel='noopener noreferrer'
              >
                GITHUB
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className={`py-2 px-3 rounded-md font-bold text-black bg-green-500 hover:text-black hover:bg-white duration-300 ${
                    resetAnimation ? 'text-focus-in' : ''
                  }`}
                  target='_blank'
                  rel='noopener noreferrer'
                  ref={animateRef}
                >
                  LIVE DEMO
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
