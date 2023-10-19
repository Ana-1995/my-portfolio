import React, { useEffect, useState } from 'react'
import me from '../../assets/me.jpeg'
import './home.css'
import { Link } from 'react-scroll'

const Home = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
    const [showRedLines, setShowRedLines] = useState(false)

  useEffect(() => {
    setResetAnimation(true)
    setTimeout(() => {
      setShowRedLines(true)
    }, 900)
  }, [])

  return (
    <section
      className='flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-x-10 px-4 lg:px-0 min-h-screen mb-6 lg:mb-8 w-full'
      id='home'
    >
      {resetAnimation ? (
        <header
          className={`text-focus-in w-full lg:w-3/5 text-center lg:text-left ml-0 lg:ml-72 mt-12 lg:mt-0`}
        >
          <h1 className='text-4xl md:text-5xl text-white mb-6 tracking-wide font-semibold'>
            Hello, I am{' '}
            <span className='text-red-600 name'>Ana Iashagashvili</span>
          </h1>
          <h2 className='text-2xl md:text-3xl text-white text-center lg:text-left tracking-wide mb-6'>
            Welcome to my{' '}
            <span className=' font-semibold lg:pl-1 text-red-600'>
              {' '}
              Frontend Playground
            </span>
          </h2>
          <p className='text-white text-lg tracking-wide text-justify lg:pb-7'>
            I invite you to join me on this journey of creativity and
            innovation. Let's work together to turn your ideas into outstanding
            web solutions that make a real impact.
          </p>

          <div className='flex flex-col lg:flex-row gap-y-4 lg:gap-x-4'>
            <Link
              to='about'
              smooth={true}
              duration={500}
              className='bg-transparent border px-4 py-2 text-white tracking-wider text-xl lg:text-lg rounded-full mt-8 lg:mt-0 hover:bg-green-800 duration-500 cursor-pointer'
            >
              More About Me
            </Link>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className={`bg-red-600 px-4 py-2 border cursor-pointer text-white tracking-wider text-xl lg:text-lg rounded-full mt-4 lg:mt-0 hover:bg-red-800 duration-500 ${
                resetAnimation ? 'shake-top' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </header>
      ) : null}

      <div className='lg:w-1/2 mt-5 mx-auto'>
        <div className='w-full lg:w-3/4 relative lg:ml-8'>
          <img
            className={`${
              resetAnimation ? 'shadow-inset-center' : 'hidden'
            } w-full h-full object-cover rounded-md`}
            src={me}
            alt='Ana I.'
          />
          <div className='absolute inset-0 flex-none lg:flex bg-gray-800 opacity-25 rounded-md' />

        {showRedLines  && (
          <>
           <div className={`${resetAnimation ? 'slide-left' : 'hidden'} absolute hidden xl:block bg-red-700 h-2 w-20 -top-8 left-10`} />
              <div className={`${resetAnimation ? 'slide-top' : 'hidden'} absolute hidden xl:block w-2 h-20 top-12 -left-10 bg-red-700`} />
              <div className={`${resetAnimation ? 'slide-bottom' : 'hidden'} absolute hidden xl:block bg-red-700 h-20 w-2 bottom-[70px] -right-10`} />
              <div className={`${resetAnimation ? 'slide-right' : 'hidden'} absolute hidden xl:block w-20 h-2 -bottom-8 right-10 bg-red-700`} />
            </>  
        )}
        </div>
      </div>
    </section>
  )
}

export default Home
