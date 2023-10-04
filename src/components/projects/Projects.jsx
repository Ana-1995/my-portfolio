import React, { useEffect, useRef, useState } from 'react'
import Title from '../Title'
import plantshop from '../../assets/plantshop.png'
import youtube from '../../assets/youtube.clone.jpg'
import './projects.css'

const Projects = () => {
  const [resetAnimation, setResetAnimation] = useState(false) 
  const animateRef=useRef(null)
  useEffect(()=>{
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
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
        className={`flex flex-col lg:flex-row flex-wrap justify-center gap-x-6 lg:gap-x-24 gap-y-10 mt-4 lg:mt-8`}
      >
        <article className='flex flex-col w-full lg:w-[35%] rounded-lg pb-3 bg-[#434343] shadow-lg shadow-gray-600'>
          <img
            src={plantshop}
            className='w-full h-auto object-cover rounded-lg'
            alt='project1'
          />
          <h3 className='text-2xl lg:text-3xl text-yellow-200 font-mono tracking-wider pt-4 px-6 '>
            E-commerce Website
          </h3>
          <p className='pt-2 text-white md:text-xl lg:text-base px-6 text-justify'>
            Green Space is an e-commerce website developed using React.js. It
            serves as the front-end for an online plant shop, enabling users to
            browse, search, and purchase various plants. This project showcases
            my front-end development skills and is an integral part of my
            portfolio.
          </p>
          <div className='flex flex-row justify-start items-center gap-x-4 mt-3 px-6'>
            <a
              href='https://github.com/Ana-1995/PlantShop-App'
              className='text-slate-100 border-gray-400 py-2 px-3 rounded-md font-bold border-2 hover:text-black hover:bg-white duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              GITHUB
            </a>
            <a
              href='https://plant-shop-app.vercel.app/'
              className={`py-2 px-3 rounded-md font-bold text-black bg-green-500 hover:text-black hover:bg-white duration-300 ${
                resetAnimation ? 'text-focus-in' : ''
              }`}
              target='_blank'
              rel='noopener noreferrer'
              ref={animateRef}
            >
              LIVE DEMO
            </a>
          </div>
        </article>
        <article className='flex flex-col w-full lg:w-[35%] rounded-lg pb-3 bg-[#434343] shadow-lg shadow-gray-600'>
          <img
            src={youtube}
            className='w-full h-auto object-cover rounded-lg'
            alt='project2'
          />
          <h3 className='text-2xl lg:text-3xl text-yellow-200 font-mono tracking-wider pt-4 px-6'>
            Youtube Clone
          </h3>
          <p className='pt-2 text-white px-6 text-justify'>
            The YouTube Clone project is a web application inspired by the
            world's most popular video-sharing platform. This project was
            created as part of my journey to enhance my web development skills
            and gain hands-on experience in building complex web applications.
          </p>
          <div className='flex flex-row justify-start items-center gap-x-4 mt-3 px-6'>
            <a
              href='https://github.com/Ana-1995/youtube'
              className='text-slate-100 border-gray-400 py-2 px-3 rounded-md font-bold border-2 hover:text-black hover:bg-white duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              GITHUB
            </a>
            <a
              href=''
              className={`py-2 px-3 rounded-md font-bold text-black bg-green-500 hover:text-black hover:bg-white duration-300 ${
                resetAnimation ? 'text-focus-in' : ''
              }`}
              target='_blank'
              rel='noopener noreferrer'
              ref={animateRef}
            >
              LIVE DEMO
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects
