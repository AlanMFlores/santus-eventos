import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import ActionButton from '../ActionButton'

const Hero = () => {
  return (
    <section className='h-screen background-gradient pt-4'>
        <header className='flex items-center justify-between mx-32 mb-4'>
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
        <div className='h-[80vh] flex flex-col items-center justify-center'>
            <div className='mb-10'>
                <Image
                    src={"/assets/images/santus-logotipo.svg"}
                    width={338}
                    height={111}
                    alt='santus logotipo'
                    className='w-80'
                />
            </div>
            <div className='w-[512px] mb-10'>
                <p className="leading-8 text-center font-light">
                    Somos una empresa dedicada a la organización integral de eventos. Estamos emocionados de ser tu aliado perfecto en eventos corporativos e institucionales.
                </p>
            </div>
            <div>
                <ActionButton action={"Contacto"}/>
                <Link href={"#"} className='px-8 py-2'>
                    Ver Galería
                </Link>
            </div>
        </div>
    </section>
    )
}

export default Hero