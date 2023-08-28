import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-center lg:justify-between mx-32 my-8 lg:my-4'>
            <div>
                <Link href={"/"}>
                    <Image
                        src={"/assets/images/santus-isologotipo.png"}
                        width={128}
                        height={128}
                        alt="santus isologotipo"
                    />
                </Link>
            </div>
            <button className='block lg:hidden' onClick={handleToggleMenu}>
                <FontAwesomeIcon icon={faBars} className='text-3xl text-mainColor'/>
            </button>
            <nav>
                <ul className={`lg:flex flex-col lg:items-center ${
                    isOpen ? 'flex' : 'hidden'
                    } lg:flex-row gap-4 lg:gap-20 items-center transition-all duration-300`}>
                    <li>
                        <Link href={"/"} className='font-semibold duration-300 hover:text-mainColor'>Home</Link>
                    </li>
                    <li>
                        <Link href={"/staff"} className='font-semibold duration-300 hover:text-mainColor'>Staff</Link>
                    </li>
                    <li>
                        <Link href={"/galeria"} className='font-semibold duration-300 hover:text-mainColor'>Galería</Link>
                    </li>
                    <li>
                        <Link href={"/contacto"} className='font-semibold duration-300 hover:text-mainColor'>Contacto</Link>
                    </li>
                </ul>
            </nav>  
            <div className={`${isOpen ? 'block' : 'hidden'} lg:block pb-8 lg:pb-0`}>
                <Link href={"https://www.instagram.com/santusproductora/"} target='blank' className='cursor-pointer'>
                    <FontAwesomeIcon icon={faInstagram} className='text-mainColor duration-300 hover:text-white text-2xl'/>
                </Link>
            </div>
        </header>
  )
}

export default Header