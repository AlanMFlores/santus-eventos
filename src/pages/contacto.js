import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <>
        <Header/>
        <section className='mx-8 md:mx-16 lg:mx-32 pt-5 lg:pt-20'>
        <h2 className='text-2xl font-semibold mb-6'>Contacto</h2>
        <div className='flex flex-col gap-6 mb-16'>
            <p className='font-light leading-8 text-justify'>
            Nuestra productora de eventos es una empresa dedicada a la <span className='text-mainColor'>planificación, organización y ejecución de todo tipo de eventos</span>. Nos especializamos en crear experiencias únicas y memorables, diseñadas a medida para satisfacer las necesidades y deseos de nuestros clientes.</p>
            <p className='font-light leading-8 text-justify'>
            Nuestro equipo de <span className='text-mainColor'>profesionales altamente capacitados y apasionados por su trabajo</span> se encarga de cada detalle, desde la conceptualización hasta la implementación, asegurando que cada evento sea un éxito rotundo. Trabajamos estrechamente con nuestros clientes para entender su visión, objetivos y presupuesto, y luego transformamos esas ideas en realidad.</p>
            <p className='font-light leading-8 text-justify'>
            Ya sea que estemos organizando una conferencia empresarial, una gala benéfica, una boda de ensueño o un concierto multitudinario, nos esforzamos por brindar servicios de primera calidad. Coordinamos todos los aspectos logísticos, como la selección de lugares, la gestión de proveedores, la decoración, la iluminación, el sonido, el catering y mucho más. Nos aseguramos de que todo funcione sin problemas para que <span className='text-mainColor'>nuestros clientes y sus invitados disfruten al máximo del evento</span>.</p>
            <p className='font-light leading-8 text-justify'>
            Además de la planificación y ejecución, también ofrecemos servicios de <span className='text-mainColor'>asesoramiento y consultoría en eventos</span>. Compartimos nuestra experiencia y conocimientos para ayudar a nuestros clientes a tomar decisiones informadas y estratégicas en cuanto a la temática, el formato y la promoción de sus eventos.</p>
            <p className='font-light leading-8 text-justify'>
            En nuestra productora de eventos, nos enorgullece ofrecer un servicio personalizado, una atención meticulosa a los detalles y una pasión inquebrantable por crear experiencias inolvidables. Nuestro objetivo es <span className='text-mainColor'>superar las expectativas en cada evento y dejar una impresión duradera en todos los asistentes</span>.</p>
        </div>

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
        <div className='flex flex-col items-center'>
            <div className='mb-20'>
                <Image
                    src={"/assets/images/santus-isologotipo.png"}
                    width={256}
                    height={256}
                    alt="santus isologotipo"
                />
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-20 mb-24'>
                <div className='flex flex-col items-center gap-4'>
                    <h3 className='font-semibold text-2xl text-mainColor mb-6 text-center'>Tuany Sanchez</h3>
                    <p className='text-center'>Productora ejecutiva de ventas</p>
                    <p className='text-center'>Diseñadora de eventos</p>
                    <Link href={"https://api.whatsapp.com/send/?phone=5493764399545&text&type=phone_number&app_absent=0"} target='blank'>
                        <div className='flex gap-4'>
                            <FontAwesomeIcon icon={faPhone} className='text-mainColor text-2xl'/>
                            <p>3764399545</p>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h3 className='font-semibold text-2xl text-mainColor mb-6 text-center'>Sandra Espíndola</h3>
                    <p className='text-center'>Productora ejecutiva de ventas</p>
                    <p className='text-center'>Corredor comercial</p>
                    <Link href={"https://api.whatsapp.com/send/?phone=5493764908152&text&type=phone_number&app_absent=0"} target='blank'>
                        <div className='flex gap-4'>
                            <FontAwesomeIcon icon={faPhone} className='text-mainColor text-2xl'/>
                            <p>3764908152</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </section>
        <Footer/>
    </>
  )
}

export default Contact