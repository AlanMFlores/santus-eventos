import React from 'react'
import ServicesCards from '../ServicesCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'

const ServicesSection = () => {
  return (
    <div className='mx-8 md:mx-16 lg:mx-32 flex flex-col items-center' id={'services'}>
        <h2 className='text-center text-2xl font-semibold mb-12'>Nuestros Servicios</h2>
        <div className='flex justify-center'>
            <ul className='flex flex-col gap-8 text-center'>
                <li className='flex justify-center items-center gap-2'>
                    <FontAwesomeIcon icon={faSquareCheck} className='text-mainColor'/>
                    <p>
                       Organización y coordinación integral
                    </p>
                </li>
                <li className='flex justify-center items-center gap-2'>
                    <FontAwesomeIcon icon={faSquareCheck} className='text-mainColor'/>
                    <p>
                        Salones exclusivos para eventos
                    </p>
                </li>
                <li className='flex justify-center items-center gap-2'>
                    <FontAwesomeIcon icon={faSquareCheck} className='text-mainColor'/>
                    <p>
                        Catering coffe break-cocktail
                    </p>
                </li>
                <li className='flex justify-center items-center gap-2'>
                    <FontAwesomeIcon icon={faSquareCheck} className='text-mainColor'/>
                    <p>
                        Decoración-Mobiliario
                    </p>
                </li>
                <li className='flex justify-center items-center gap-2'>
                    <FontAwesomeIcon icon={faSquareCheck} className='text-mainColor'/>
                    <p>
                        Sonido-Pantalla Led-DJ
                    </p>
                </li>
                <li className='flex justify-center items-center gap-2'>
                    <FontAwesomeIcon icon={faSquareCheck} className='text-mainColor'/>
                    <p>
                        Alojamiento-Transfer in/out
                    </p>
                </li>
                <li className='flex justify-center items-center gap-2'>
                    <FontAwesomeIcon icon={faSquareCheck} className='text-mainColor'/>
                    <p>
                        Asesoramiento personalizado
                    </p>
                </li>
                <li className='flex justify-center items-center gap-2'>
                    <FontAwesomeIcon icon={faSquareCheck} className='text-mainColor'/>
                    <p>
                        Eventos corporativos (talleres, capacitaciones, congresos, reuniones, asambleas, conferencias, etc)
                    </p>
                </li>
                <li className='flex justify-center items-center gap-2'>
                    <FontAwesomeIcon icon={faSquareCheck} className='text-mainColor'/>
                    <p>
                        Eventos sociales (cocktail, brindis, fiesta de fin de año, cumpleaños, etc)
                    </p>
                </li>
                <li className='flex justify-center items-center gap-2'>
                    <FontAwesomeIcon icon={faSquareCheck} className='text-mainColor'/>
                    <p>
                        Eventos masivos (shows, técnica para shows en vivo, contratación de artistas, etc)
                    </p>
                </li>
            </ul>
        </div>
        <ServicesCards/>
    </div>
  )
}

export default ServicesSection