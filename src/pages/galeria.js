import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import GalleryGrid from '@component/components/sections/GalleryGrid'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Gallery = () => {
  return (
    <>
        <Header/>
        <section className='mx-8 md:mx-16 lg:mx-32 pt-5 lg:pt-20 text-center lg:text-left'>
        <h2 className='text-2xl font-semibold mb-6'>Galería</h2>
        <p className='w-full lg:w-[600px] font-light leading-8 mb-16'>Te dejamos una muestra fotográfica de los eventos que hemos realizado.</p>
        </section>
        <GalleryGrid/>
        <p className='font-light leading-8 text-center mb-12'>Si te interesa dejar tu evento en nuestras manos, podes contactarte con nosotros y <span className='text-mainColor'>pedir una cotización</span> a través de los siguientes medios.</p>
        <div className='flex flex-col items-center lg:flex-row justify-center gap-16 mb-32'>
            <Link href={"https://api.whatsapp.com/send/?phone=5493764399545&text&type=phone_number&app_absent=0"} target='blank'>
                <div className='flex gap-4'>
                    <FontAwesomeIcon icon={faPhone} className='text-mainColor text-2xl'/>
                    <p>3764399545</p>
                </div>
            </Link>
            <Link href={"https://www.instagram.com/santusproductora/"} target='blank'>
                <div className='flex gap-4'>
                    <FontAwesomeIcon icon={faInstagram} className='text-mainColor text-2xl'/>
                    <p>@santusproductora</p>
                </div>
            </Link> 
            <Link href={"mailto:santusproductora@gmail.com"}>
                <div className='flex gap-4'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-mainColor text-2xl'/>
                    <p>santusproductora@gmail.com</p>
                </div>
            </Link>
        </div>
        <Footer/>
    </>
  )
}

export default Gallery