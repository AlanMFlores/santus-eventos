import React from 'react'
import ProposalCard from '../ProposalCard'

const ProposalSection = () => {
  return (
    <div className='flex flex-col items-center mx-32 pt-20'>
        <h2 className='text-center text-2xl font-semibold mb-6'>Nuestra Propuesta</h2>
        <p className='w-[600px] font-light text-center leading-8 mb-16'>En <span className='text-mainColor font-semibold'>Santu’s</span>, estamos emocionados de ser tu aliado perfecto en eventos corporativos e institucionales.</p>
        <div className='flex gap-6 mb-16'>
            <ProposalCard title={"¿Qué ofrecemos?"} description={"Somos una empresa dedicada a la organización integral de eventos. Desde el asesoramiento hasta la producción y coordinación, ¡nos ocupamos de todo para que tengas la mejor experiencia!"}/>
            <ProposalCard title={"Únicas"} description={"Contamos con un equipo de profesionales apasionados y altamente capacitados en el área de eventos .Su creatividad y dedicación se reflejarán en cada detalle."}/>
            <ProposalCard title={"¿Por qué elegirnos?"} description={"Santus llega con un enfoque fresco e innovador. Como nueva opción en el mercado, nos destacamos por nuestra atención personalizada y por ofrecer un amplio abanico de sedes y proveedores exclusivos "}/>
        </div>
        <p className='font-light w-[704px] text-center leading-8'>Ahora que hemos llegado para ser tu socio estratégico, relájate y disfruta de la previa y tu evento <span className='text-mainColor font-semibold'>sin preocuparte por nada.</span></p>
    </div>
  )
}

export default ProposalSection