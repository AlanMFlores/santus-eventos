import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
const ContactSection = () => {
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-center text-2xl font-semibold mb-6'>Contacto</h2>
        <p className='font-light w-[600px] text-center leading-8 mb-16'>Si te interesa dejar tu evento en nuestras manos, podes contactarte con nosotros a través de los siguientes medios.</p>
        <div className='flex gap-16'>
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
    </div>
  )
}

export default ContactSection