import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import GalleryGrid from '@component/components/sections/GalleryGrid'

const Gallery = () => {
  return (
    <>
        <Header/>
        <section className='mx-8 md:mx-16 lg:mx-32 pt-20 text-center lg:text-left'>
        <h2 className='text-2xl font-semibold mb-6'>Galería</h2>
        <p className='w-full lg:w-[600px] font-light leading-8 mb-16'>Te dejamos una muestra fotográfica de los eventos que hemos realizado.</p>
        </section>
        <GalleryGrid/>
        <Footer/>
    </>
  )
}

export default Gallery