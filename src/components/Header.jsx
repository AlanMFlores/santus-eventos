import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <header className='flex items-center justify-between mx-32 my-4'>
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
            <nav>
                <ul className='flex gap-20'>
                    <li>
                        <Link href={"/"} className='font-semibold duration-300 hover:text-mainColor'>Home</Link>
                    </li>
                    <li>
                        <Link href={""} className='font-semibold duration-300 hover:text-mainColor'>Staff</Link>
                    </li>
                    <li>
                        <Link href={"/galeria"} className='font-semibold duration-300 hover:text-mainColor'>Galería</Link>
                    </li>
                    <li>
                        <Link href={"/contacto"} className='font-semibold duration-300 hover:text-mainColor'>Contacto</Link>
                    </li>
                </ul>
            </nav>  
            <div>
                <Link href={"https://www.instagram.com/santusproductora/"} target='blank' className='cursor-pointer'>
                    <FontAwesomeIcon icon={faInstagram} className='text-mainColor duration-300 hover:text-white text-2xl'/>
                </Link>
            </div>
        </header>
  )
}

export default Header