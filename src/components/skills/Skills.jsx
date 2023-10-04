import React, { useEffect, useRef, useState } from 'react'
import Title from '../Title'
import './skills.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import certificate1 from '../../assets/certificate1.jpg'
import certificate2 from '../../assets/certificate2.jpg'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import git from '../../assets/git.png'
import github from '../../assets/github.png'
import tailwind from '../../assets/tailwind.webp'

const Skills = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const animateRef = useRef(null)
  useEffect(() => {
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
  
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <section
      id='skills'
      className='text-white mt-12 lg:mt-24 px-4 lg:px-0 h-full mb-8'
    >
      <div className='ml-0 lg:ml-60'>
        <Title title={'Certifications & Technical Skills'} />
      </div>
      <div>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start mt-5 lg:mt-9 lg:mb-24 lg:ml-72'>
          <div className='w-full lg:w-[35rem]'>
            <Slider {...settings} className='w-full h-full rounded-md pb-3'>
              <div>
                <img
                  className='w-full h-auto object-cover rounded-md'
                  src={certificate1}
                  alt='Programmer'
                />
              </div>
              <div>
                <img
                  src={certificate2}
                  alt='About'
                  className='w-full h-auto object-cover rounded-md'
                />
              </div>
            </Slider>
          </div>
          <div className='lg:ml-10 mt-12 lg:mt-0'>
            <h2 className='text-xl md:text-2xl text-yellow-200 font-mono tracking-wider text-center font-semibold lg:text-start'>
              Continuous Learning and Ongoing Growth
            </h2>
            <p
              className={`pt-4 leading-7 lg:w-[85%] md:text-xl lg:text-base lg:leading-7 text-justify ${
                resetAnimation ? 'tracking-in-expand-fwd' : ''
              }`}
            >
              Last year, I completed an intensive Frontend Development course at
              the Digital Industry Academy, resulting in two certificates: one
              in Frontend Technologies{' '}
              <span className='font-bold text-green-500 tracking-wider'>
                (HTML and CSS)
              </span>{' '}
              and the other in{' '}
              <span className='font-bold text-green-500 tracking-wider'>
                JavaScript.
              </span>{' '}
              <br />
              <br />
              These certificates involved practical project development,
              showcasing my skills. I'm committed to enhancing my web
              development expertise. <br /> <br /> Currently, I'm focused on
              mastering{' '}
              <span className='font-bold text-green-500 tracking-wider'>
                React.js
              </span>
              . I have also learned the CSS framework{' '}
              <span className='font-bold text-green-500 tracking-wider'>
                Tailwind.css
              </span>{' '}
              and am actively using them in my projects. This reflects my
              dedication to staying current in web development and continually
              honing my skills.
            </p>
          </div>
        </div>

        <div className='flex flex-row justify-center items-center gap-x-6 gap-y-5 flex-wrap mt-8 ml-0 lg:ml-60 lg:mb-20'>
          {/* Adjust image sizes */}
          <img src={html} className='w-16 h-16 object-contain' alt='HTML' />
          <img src={css} className='w-16 h-16 object-contain' alt='CSS' />
          <img src={js} className='w-16 h-16 object-contain' alt='JavaScript' />
          <img src={react} className='w-16 h-16 object-contain' alt='React' />
          <img src={tailwind} className='w-20 h-16 object-contain' alt='tailwind' />
          <img src={git} className='w-16 h-16 object-contain' alt='Git' />
          <img src={github} className='w-16 h-16 object-contain' alt='GitHub' />
        </div>
      </div>
    </section>
  )
}

export default Skills
