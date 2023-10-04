import React from 'react'
import programmer from '../../assets/programmer.png'
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <section className='pb-4 lg:pb-10'>
      <div className='w-full lg:w-[76.5%] h-[3px] ml-0 lg:ml-72 bg-stone-300' />
      <div className='w-20 h-20 mx-auto lg:ml-72 flex items-center justify-center py-10 lg:py-0'>
        <Link to='home' smooth={true} duration={500} className='cursor-pointer'>
          <img src={programmer} alt='developer' className='pt-10' />
        </Link>
      </div>
      <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-x-5 lg:gap-x-60 ml-0 lg:ml-72'>
        <div className='text-yellow-400 hover:text-yellow-500 duration-200'>
          <h1 className='text-3xl tracking-widest pb-3 text-white uppercase text-center lg:text-start pt-10 lg:pt-0'>
            Say Hello
          </h1>
          <a
            href='mailto:ananoiashagashvili@gmail.com'
            target='_blank'
            className='font-semibold cursor-pointer inline-block tracking-wide'
          >
            ananoiashagashvili@gmail.com
          </a>
        </div>
        <div className='flex flex-col pt-5 lg:pt-8 text-yellow-400 text-xl lg:text-2xl gap-y-2 lg:gap-y-6 pb-2 lg:pb-20'>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            className='hover:text-yellow-500 duration-200 cursor-pointer'
          >
            My Skills
          </Link>
          <Link
            to='projects'
            smooth={true}
            duration={500}
            className='hover:text-yellow-500 duration-200 cursor-pointer'
          >
            My Projects
          </Link>

          <Link
            to='contact'
            smooth={true}
            duration={500}
            className='hover:text-yellow-500 duration-200 cursor-pointer'
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center ml-0 lg:ml-72 mt-2 lg:mt-8 w-full lg:w-[76.5%] pt-4 pb-20 lg:pb-2 border-t border-stone-400'>
        <p className='text-yellow-400 pl-1'>© Ana Iashagashvili 2023</p>
        <div className='flex gap-x-1 lg:gap-x-5 text-yellow-300 text-xl px-2 lg:px-0'>
          <a
            className='duration-300 hover:text-yellow-500'
            href='https://www.instagram.com/anaiashagashvili_/'
          >
            <AiOutlineInstagram />
          </a>
          <a
            className='duration-300 hover:text-yellow-500'
            href='https://api.whatsapp.com/send?phone=995982215160'
          >
            <AiOutlineWhatsApp />
          </a>
          <a
            className='duration-300 hover:text-yellow-500'
            href='https://www.linkedin.com/in/ana-iashagashvili-b25523291/'
          >
            <AiOutlineLinkedin />
          </a>
          <a
            className='duration-300 hover:text-yellow-500'
            href='https://github.com/Ana-1995'
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer
