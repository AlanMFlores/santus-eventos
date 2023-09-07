import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import Image from 'next/image'

const Staff = () => {
  return (
    <>
        <Header/>
        <section className='mx-8 md:mx-16 lg:mx-32 pt-5 lg:pt-20 text-center lg:text-left'>
        <h2 className='text-2xl font-semibold mb-6'>Staff</h2>
        <p className='w-full font-light leading-8 mb-12'>Te presentamos el amplio abanico de sedes de eventos y proveedores exclusivos con los que trabajamos.</p>
        </section>
        <section className='mx-8 md:mx-16 lg:mx-32 text-center lg:text-left mb-20'>
          <div className='grid justify-items-center place-items-center grid-cols-1 md:grid-cols-2 md:max-w-[528px] md:mx-auto lg:grid-cols-3 lg:max-w-none lg:mx-0 xl:grid-cols-4 gap-4'>
            <div className='h-64 w-64'>
              <Image
                src={'/assets/images/proveedores/charly-sound.jpg'}
                width={256}
                height={256}
                className='object-contain h-full w-full lg:duration-300 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105'
                alt='charly sound'
              />
            </div>
            <div className='h-64 w-64'>
              <Image
                src={'/assets/images/proveedores/pizzas-1985.jpg'}
                width={256}
                height={256}
                className='object-contain h-full w-full lg:duration-300 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105'
                alt='pizzas 1985'
              />
            </div>
            <div className='h-64 w-64'>
              <Image
                src={'/assets/images/proveedores/cec-event-planner.jpg'}
                width={256}
                height={256}
                className='object-contain h-full w-full lg:duration-300 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105'
                alt='cec event planner'
              />
            </div>
            <div className='h-64 w-64'>
              <Image
                src={'/assets/images/proveedores/continental-hotel.jpg'}
                width={256}
                height={256}
                className='object-contain h-full w-full lg:duration-300 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105'
                alt='continental hotel'
              />
            </div>
            <div className='h-64 w-64'>
              <Image
                src={'/assets/images/proveedores/f-eventos.jpg'}
                width={256}
                height={256}
                className='object-contain h-full w-full lg:duration-300 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105'
                alt='f eventos'
              />
            </div>
            <div className='h-64 w-64'>
              <Image
                src={'/assets/images/proveedores/pasteleria-g&e.jpg'}
                width={256}
                height={256}
                className='object-contain h-full w-full lg:duration-300 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105'
                alt='pasteleria-g&e'
              />
            </div>
            <div className='h-64 w-64'>
              <Image
                src={'/assets/images/proveedores/lala-artesanales.jpg'}
                width={256}
                height={256}
                className='object-contain h-full w-full lg:duration-300 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105'
                alt='lala artesanales'
              />
            </div>
            <div className='h-64 w-64'>
              <Image
                src={'/assets/images/proveedores/el-secreto.jpg'}
                width={256}
                height={256}
                className='object-contain h-full w-full lg:duration-300 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105'
                alt='el secreto'
              />
            </div>
            <div className='h-64 w-64'>
              <Image
                src={'/assets/images/proveedores/recetas-del-litoral.jpg'}
                width={256}
                height={256}
                className='object-contain h-full w-full lg:duration-300 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105'
                alt='recetas del litoral'
              />
            </div>
            <div className='h-64 w-64'>
              <Image
                src={'/assets/images/proveedores/monica-hein-modelos.jpg'}
                width={256}
                height={256}
                className='object-contain h-full w-full lg:duration-300 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105'
                alt='monica hein modelos'
              />
            </div>
            <div className='h-64 w-64'>
              <Image
                src={'/assets/images/proveedores/ruben-da-cruz.jpg'}
                width={256}
                height={256}
                className='object-contain h-full w-full lg:duration-300 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105'
                alt='ruben da cruz eventos'
              />
            </div>
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default Staff