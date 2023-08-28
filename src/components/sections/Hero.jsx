import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import ActionButton from '../ActionButton'
import Header from '../Header'

const Hero = () => {
  return (
    <section className='h-auto lg:h-screen background-gradient pt-4'>
        <Header/>
        <div className='pt-5 lg:pt-0 lg:h-[80vh] flex flex-col items-center justify-center mx-8 md:mx-16'>
            <div className='mb-10'>
                <Image
                    src={"/assets/images/santus-logotipo.svg"}
                    width={338}
                    height={111}
                    alt='santus logotipo'
                    className='w-60 lg:w-80'
                />
            </div>
            <div className='w-auto lg:w-[512px] mb-10'>
                <p className="leading-8 text-center font-light">
                    Somos una empresa dedicada a la organización integral de eventos. Estamos emocionados de ser tu aliado perfecto en eventos corporativos e institucionales.
                </p>
            </div>
            <div>
                <Link href={"/contacto"}>
                    <ActionButton action={"Contacto"}/>
                </Link>
                <Link href={"#"} className='px-8 py-2 duration-300 hover:text-mainColor'>
                    Ver Galería
                </Link>
            </div>
        </div>
    </section>
    )
}

export default Hero