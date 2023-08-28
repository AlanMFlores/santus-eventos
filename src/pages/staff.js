import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'


const staff = () => {
  return (
    <>
        <Header/>
        <section className='mx-8 md:mx-16 lg:mx-32 pt-5 lg:pt-20 text-center lg:text-left'>
        <h2 className='text-2xl font-semibold mb-6'>Staff</h2>
        <p className='w-full font-light leading-8 mb-16'>Te mostramos el amplio abanico de sedes de eventos y proveedores exclusivos con los que trabajamos.</p>
        </section>
        <Footer/>
    </>
  )
}

export default staff