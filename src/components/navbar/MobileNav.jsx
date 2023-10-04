import React, { useState } from 'react'
import { BiBook } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { SlUserFemale } from 'react-icons/sl'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { RiContactsLine } from 'react-icons/ri'
import { Link } from 'react-scroll'

const MobileNav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className=' bg-indigo-700 m-auto flex lg:hidden py-1 px-3 z-10 fixed left-[50%] translate-x-[-50%] bottom-3 gap-x-1 rounded-full backdrop-blur-sm border-2 border-zinc-50'>
      <Link
        to='home'
        smooth={true}
        duration={500}
        onClick={() => handleNavClick('#home')}
        className={`bg-transparent p-3 rounded-full flex text-white text-xl ${
          activeNav === '#home' ? 'text-red-600' : ''
        }`}
      >
        {<AiOutlineHome size={20} />}
      </Link>

      <Link
        to='about'
        smooth={true}
        duration={500}
        onClick={() => handleNavClick('#about')}
        className={`bg-transparent p-3 rounded-full flex text-white text-xl ${
          activeNav === '#about' ? 'text-red-600' : ''
        }`}
      >
        {<SlUserFemale size={20} />}
      </Link>
      <Link
        to='skills'
        smooth={true}
        duration={500}
        onClick={() => handleNavClick('#skills')}
        className={`bg-transparent p-3 rounded-full flex text-white text-xl ${
          activeNav === '#skills' ? 'text-red-600' : ''
        }`}
      >
        {<BiBook size={20} />}
      </Link>
      <Link
        to='projects'
        smooth={true}
        duration={500}
        onClick={() => handleNavClick('#projects')}
        className={`bg-transparent p-3 rounded-full flex text-white text-xl ${
          activeNav === '#projects' ? 'text-red-600' : ''
        }`}
      >
        {<MdOutlineWorkOutline size={20} />}
      </Link>
      <Link
        to='contact'
        smooth={true}
        duration={500}
        onClick={() => handleNavClick('#contact')}
        className={`bg-transparent p-3 rounded-full flex text-white text-xl ${
          activeNav === '#contact' ? 'text-red-600' : ''
        }`}
      >
        {<RiContactsLine size={20} />}
      </Link>
    </nav>
  )
}

export default MobileNav
