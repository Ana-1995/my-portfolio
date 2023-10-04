import React from 'react'

const Title = ({ title }) => {
  return (
    <h1 className='text-center name py-3 lg:py-5 capitalize text-5xl md:text-6xl tracking-wider font-semibold'>
      <span className='bg-gradient-to-r from-[var(--title1-gradient-from)] to-[var(--title1-gradient-to)] bg-clip-text text-transparent font-bold'>
        {title}
      </span>
    </h1>
  )
}

export default Title
