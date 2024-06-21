import Link from 'next/link'
import React from 'react'
import BurgerButton from './BurgerButton'
import Image from 'next/image'

const NavbarCo = () => {
  return (
    <>
    <div className='w-full h-40 text-amber-950 bg-navbar-bg bg-opacity-50 items-center justify-between hidden md:flex z-50'>
      <Image className='ml-5 w-auto h-auto' src={'/images/titulo.png'} width={150} height={50} alt='title' />
      <div className='flex xl:space-x-24 space-x-5 lg:text-xl text-sm'>
        <Link href='#about' className=' backdrop-blur-lg'>NUESTRO GIN</Link>
        <Link href='#botanicos' className=' backdrop-blur-lg'>BOTÁNICOS</Link>
        <Link href='#us' className=' backdrop-blur-lg'>NOSOTROS</Link>
        <Link href='#contact' className=' backdrop-blur-lg'>CONTACTO</Link>
      </div>
      <Image className='mr-5 w-auto h-auto' src={'/images/logo.png'} width={100} height={100}/>
    </div>
    <BurgerButton/>
    </>
  )
}

export default NavbarCo

