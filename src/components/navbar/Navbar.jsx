import React, { useState } from 'react'
import './navbar.css'
import programmer from '../../assets/programmer.png'
import { AiOutlineHome } from 'react-icons/ai'
import { SlUserFemale } from 'react-icons/sl'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { BiBook } from 'react-icons/bi'
import { RiContactsLine } from 'react-icons/ri'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [resetAnimation, setResetAnimation] = useState(false)

  const [activeSection, setActiveSection] = useState('home')
  const observer = useRef(null)

    useEffect(() => {
    setTimeout(() => setResetAnimation(true), 100) 
     // Create an Intersection Observer
     observer.current = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update the active section when a section is in the viewport
          setActiveSection(entry.target.id)
        }
      })
    },
    { threshold: 0.5 } // Adjust the threshold as needed
  )

  // Observe the sections you want to track
  const sectionsToObserve = ['home', 'about', 'skills', 'projects', 'contact']
  sectionsToObserve.forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      observer.current.observe(section)
    }
  })

  // Clean up the observer when the component unmounts
  return () => {
    if (observer.current) {
      observer.current.disconnect()
    }
  }
  }, [])

  //active navbar on scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      })
      setActiveSection(sectionId) // Update the active section
    }
  }

  // Define a function to check if an item is active
  const isItemActive = (sectionId) => {
    return sectionId === activeSection
  }

  return (
    <div className='text-white px-14 bg-neutral-700 lg:flex-col lg:items-center lg:justify-start hidden lg:flex fixed top-0 h-full overflow-y-auto'>
      <div className='w-20 h-20 relative mt-10 mb-40 cursor-pointer'>
        <Link classID='' to='home' smooth={true} duration={500}>
          <img src={programmer} alt='developer' />
        </Link>
        <div
          className={`${
            resetAnimation ? 'slide-right' : ''
          } absolute bg-red-700 h-1 w-6 -top-3 right-20`}
        />
        <div
          className={`${
            resetAnimation ? 'slide-top' : ''
          } absolute bg-red-700 h-5 w-1 top-[4.5rem] right-0`}
        />
        <div
          className={`${
            resetAnimation ? 'slide-bottom' : ''
          } absolute bg-red-700 h-5 w-1 bottom-20 -left-3`}
        />
        <div
          className={`${
            resetAnimation ? 'slide-left' : ''
          } absolute bg-red-700 h-1 w-6 -bottom-6 -right-3`}
        />
      </div>

      <nav>
        <ul className='flex flex-col justify-start items-start gap-3 font-semibold tracking-widest capitalize'>
          <div
            className={`flex flex-row justify-center items-center gap-3 mx-3 ${
              isItemActive('home') ? 'text-red-500' : ''
            }`}
          >
            <AiOutlineHome
              className={isItemActive('home') ? 'text-red-500' : ''}
            />
            <Link
              to='home'
              smooth={true}
              duration={500}
              onClick={() => scrollToSection('home')}
              className='text-center focus:outline-none cursor-pointer'
            >
              home
            </Link>
          </div>
          <li className='bg-gray-400 h-[0.5px] w-full' />
          <div
            className={`flex flex-row justify-center items-center gap-3 mx-3 ${
              isItemActive('about') ? 'text-red-500' : ''
            }`}
          >
            <SlUserFemale
              className={isItemActive('about') ? 'text-red-500' : ''}
            />
            <Link
              to='about'
              smooth={true}
              duration={500}
              onClick={() => scrollToSection('about')}
              className='text-center focus:outline-none cursor-pointer'
            >
              about
            </Link>
          </div>
          <li className='bg-gray-400 h-[0.5px] w-full' />
          <div
            className={`flex flex-row justify-center items-center gap-3 mx-3 ${
              isItemActive('skills') ? 'text-red-500' : ''
            }`}
          >
            <BiBook className={isItemActive('skills') ? 'text-red-500' : ''} />
            <Link
              to='skills'
              smooth={true}
              duration={500}
              onClick={() => scrollToSection('skills')}
              className='text-center focus:outline-none cursor-pointer'
            >
              skills
            </Link>
          </div>
          <li className='bg-gray-400 h-[0.5px] w-full' />
          <div
            className={`flex flex-row justify-center items-center gap-3 mx-3 ${
              isItemActive('projects') ? 'text-red-500' : ''
            }`}
          >
            <MdOutlineWorkOutline
              className={isItemActive('projects') ? 'text-red-500' : ''}
            />
            <Link
              to='projects'
              smooth={true}
              duration={500}
              onClick={() => scrollToSection('projects')}
              className='text-center focus:outline-none cursor-pointer'
            >
              projects
            </Link>
          </div>
          <li className='bg-gray-400 h-[0.5px] w-full' />
          <div
            className={`flex flex-row justify-center items-center gap-3 mx-3 ${
              isItemActive('contact') ? 'text-red-500' : ''
            }`}
          >
            <RiContactsLine
              className={isItemActive('contact') ? 'text-red-500' : ''}
            />
            <Link
              to='contact'
              smooth={true}
              duration={500}
              onClick={() => scrollToSection('contact')}
              className='text-center focus:outline-none cursor-pointer'
            >
              contact
            </Link>
          </div>
          <li className='bg-gray-400 h-[0.5px] w-full' />
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
