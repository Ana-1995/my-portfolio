import React, { useEffect, useRef, useState } from 'react'
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import Title from '../Title'
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
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
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_g6vcqg7',
      'template_45uwxsm',
      form.current,
      'a_fI2qQeDE01s8g3M'
    )
    e.target.reset()
  }

  const contactOptions = [
    {
      icon: <AiOutlineMail className='mb-4 text-2xl m-auto text-orange-50' />,
      title: 'Email',
      contactInfo: 'ananoiashagashvili@gmail.com',
      link: 'mailto:ananoiashagashvili@gmail.com',
    },
    {
      icon: (
        <AiOutlineInstagram className='mb-4 text-2xl m-auto text-orange-50' />
      ),
      title: 'Instagram',
      link: 'https://www.instagram.com/anaiashagashvili_/',
    },
    {
      icon: (
        <AiOutlineWhatsApp
          className='mb-4 text-2xl m-auto text-orange-50'
          aria-label='Email icon'
        />
      ),
      title: 'WhatsUp',
      contactInfo: '+995 598 22 51 60',
      link: 'https://api.whatsapp.com/send?phone=995982215160',
    },
  ]

  return (
    <section
      id='contact'
      className='mt-2 lg:mt-20 mb-10 lg:mb-20 ml-0 lg:ml-72 px-4 lg:px-0'
    >
      <Title title={'contact'} />
      <div className='flex flex-col lg:flex-row gap-5 lg:gap-24 mt-6 lg:mt-10'>
        <div
          className={`flex flex-col gap-6 flex-1 lg:flex-[0.3] lg:ml-32 ${
            resetAnimation ? 'scale-in-ver-top' : ''
          }`}
          ref={animateRef}
        >
          {contactOptions.map((option, index) => (
            <article
              key={index}
              className=' bg-red-900 p-5 rounded-lg text-center border border-white duration-300 hover:bg-transparent'
            >
              {option.icon}
              <h4 className='text-white mb-3 font-semibold text-lg'>
                {option.title}
              </h4>
              {option.contactInfo && (
                <h5 className='text-white mb-3'>{option.contactInfo}</h5>
              )}
              <a
                href={option.link}
                target='_blank'
                className='text-yellow-300 font-semibold cursor-pointer hover:text-orange-400 duration-300 inline-block tracking-wide'
              >
                Send a message
              </a>
            </article>
          ))}
        </div>
        {/* end of contact options */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex-1 lg:flex-[0.5] flex flex-col gap-6'
        >
          <input
            className='border border-indigo-100 w-full p-5 rounded-md bg-transparent resize-none text-white'
            type='text'
            name='name'
            placeholder='Your Name'
            required
          />
          <input
            className='border border-indigo-100 w-full  p-5 rounded-md bg-transparent resize-none text-white'
            type='email'
            name='email'
            placeholder='Your Email'
            required
          />
          <textarea
            className='border border-indigo-100 w-full  p-5 rounded-md bg-transparent resize-none text-white'
            name='message'
            rows='7'
            placeholder='Text Me'
            required
          ></textarea>
          <button
            type='submit'
            className='text-center text-white font-semibold bg-green-700 hover:bg-green-700 py-2 px-4 rounded-lg tracking-wider mx-auto lg:ml-0'
          >
            Let's Collaborate
          </button>
          {/* getform.io for receiving a message */}
        </form>
      </div>
    </section>
  )
}

export default Contact
