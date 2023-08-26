import React from 'react'
import Image from 'next/image'
import ActionButton from '../ActionButton'

const GallerySection = () => {
  return (
    <div className='mx-32 py-20 flex flex-col items-center'>
        <h2 className='text-center text-2xl font-semibold mb-12'>Galería de Fotos</h2>
        <div className='grid grid-cols-2 gap-8 mb-12'>
            <div>
                <Image
                    src={"/assets/images/gallery-home-1.jpg"}
                    height={255}
                    width={576}
                    alt="gallery home 1"
                />
            </div>
            <div>
                <Image
                    src={"/assets/images/gallery-home-2.jpg"}
                    height={255}
                    width={576}
                    alt="gallery home 2"
                />
            </div>
            <div>
                <Image
                    src={"/assets/images/gallery-home-3.jpg"}
                    height={255}
                    width={576}
                    alt="gallery home 3"
                />
            </div>
            <div>
                <Image
                    src={"/assets/images/gallery-home-4.jpg"}
                    height={255}
                    width={576}
                    alt="gallery home 4"
                />
            </div>
        </div>
        <ActionButton action={"Ver más fotos"}/>
    </div>
  )
}

export default GallerySection