import React, { useEffect, useState, useRef } from 'react'
import about from '../../assets/about.png'
import Title from '../Title'
import './aboutMe.css'
import { Link } from 'react-scroll'

 const aboutData = [
  {
    id: 1,
    h2: '**Responsibility:**',
    p: '- I understand the importance of being accountable for my contributions to a project and ensuring that my code is reliable and well-documented.',
  },
  {
    id: 2,
    h2: '**Problem-Solving:**',
    p: "- I thrive on challenges and enjoy tackling intricate problems. Whether it's debugging code or finding creative solutions to user interface issues, I approach each task with a problem-solving mindset.",
  },
  {
    id: 3,
    h2: '**Team Player:**',
    p: '- I value collaboration and believe that great results are achieved through teamwork. I actively seek opportunities to work with others, leveraging their strengths to enhance project outcomes.',
  },
  {
    id: 4,
    h2: '**Communication:**',
    p: '- I understand the importance of clear and effective communication, not just in technical terms but also in conveying ideas to non-technical stakeholders. This skill helps bridge the gap between development and design.',
  },
  {
    id: 5,
    h2: '**Adaptability:**',
    p: "- The tech industry is constantly evolving, and I embrace change. I'm eager to learn new technologies and techniques, staying updated with industry trends to provide cutting-edge solutions.",
  },
  {
    id: 6,
    h2: ' **Motivation:**',
    p: "- My motivation to pursue a career as a front-end developer is fueled by my genuine passion for web development. I'm driven to continuously improve my skills and contribute to innovative and user-friendly web experiences.",
  },
]

const AboutMe = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const imageRef = useRef(null)
  const articleRef = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01,
    }

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setResetAnimation(true)
          observer.unobserve(entry.target)
        }
      })
    }, options)

    const articleObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setResetAnimation(true)
          observer.unobserve(entry.target)
        }
      })
    }, options)

    if (imageRef.current) {
      imageObserver.observe(imageRef.current)
    }

    if (articleRef.current) {
      articleObserver.observe(articleRef.current)
    }

    return () => {
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current)
      }
      if (articleRef.current) {
        articleObserver.unobserve(articleRef.current)
      }
    }
  }, [])

  return (
    <>
      <section
        id='about'
        className='text-white ml-0 lg:ml-72 mb-10 lg:mb-20 px-4 lg:px-0 h-full'
      >
        <Title title={'about me'} />
        <div className='flex flex-col lg:flex-row gap-2 mt-2 lg:mt-4'>
          <div
            className={`w-full lg:w-[40%]`}
          >
            <img
              src={about}
              className={`${resetAnimation ? 'scale-in-hor-left' : ''} object-cover w-full h-auto`}
              alt='react journey'
              ref={imageRef}
            />
          </div>
          <article
            className={`flex flex-col text-start justify-center items-center lg:items-start w-full lg:w-[60%] mt-4 lg:mt-0 ${
              resetAnimation ? 'text-focus-in' : ''
            }`}
            ref={articleRef}
          >
            <h1 className=' text-2xl md:text-3xl tracking-wider capitalize font-mono font-semibold lg:pl-7 text-yellow-200'>
              My journey in code
            </h1>
            <p className='leading-7 pt-4 lg:pl-7 lg:w-[85%] md:text-lg lg:text-base text-justify'>
              I'm Ana, a lifelong learner who recently embarked on an exciting
              new journey in the world of coding. While my background lies in
              different profession, my passion for technology led me to explore
              the limitless possibilities of coding. Just over a year ago, I
              took my first steps into the coding world, and it's been an
              incredible ride ever since. I've been committed to honing my
              coding skills, embracing the challenges, and turning my ideas into
              reality through lines of code.
            </p>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className={`bg-green-700 ml-4 lg:ml-7 text-white py-2 px-4 rounded-full mt-5 hover:bg-green-900 duration-500 text-xl  tracking-wider cursor-pointer ${
                resetAnimation ? 'shake-top' : ''
              }`}
            >
              Hire Me
            </Link>
          </article>
        </div>
      </section>
      <article
        className={`bg-stone-700 rounded-md shadow-md shadow-zinc-500 flex flex-col justify-center items-start w-full lg:w-[70%] ml-0 lg:ml-[21rem] px-4 lg:px-7 py-5 ${
          resetAnimation ? 'color-change-2x' : ''
        }`}
      >
        {aboutData.map((item) => (
          <div key={item.id}>
            <h2 className='text-start md:text-3xl lg:text-2xl text-amber-200 tracking-wider font-semibold pt-4 '>
              {item.h2}
            </h2>
            <p className='text-white pt-1 pb-3 md:text-xl lg:text-base text-justify'>
              {item.p}
            </p>
          </div>
        ))}
      </article>
    </>
  )
}

export default AboutMe