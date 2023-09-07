import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ServicesCards = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageOverlay, setImage] = useState('');

    const handleImageOverlay = (image) => {
     setIsVisible(true)
     setImage(image)
    }
    
    const closeOverlay = () => {
        setIsVisible(false);
    }

  return (
    <>
    <div className='flex flex-col xl:flex-row xl:justify-center pt-20 gap-4'>
            <Image
                src={'/assets/images/fin-de-año.jpg'}
                width={360}
                height={360}
                alt='evento de fin de año'
                className='w-full max-w-lg lg:max-w-[360px] duration-300 lg:opacity-80 lg:hover:opacity-100 cursor-pointer'
                onClick={() => handleImageOverlay('/assets/images/fin-de-año.jpg')}
            />
            <Image
                src={'/assets/images/boda.jpg'}
                width={360}
                height={360}
                alt='evento de boda'
                className='w-full max-w-lg lg:max-w-[360px] duration-300 lg:opacity-80 lg:hover:opacity-100 cursor-pointer'
                onClick={() => handleImageOverlay('/assets/images/boda.jpg')}
            />
            <Image
                src={'/assets/images/evento-corporativo.jpg'}
                width={360}
                height={360}
                alt='evento corporativo'
                className='w-full max-w-lg lg:max-w-[360px] duration-300 lg:opacity-80 lg:hover:opacity-100 cursor-pointer'
                onClick={() => handleImageOverlay('/assets/images/evento-corporativo.jpg')}
            />
    </div>
    {
        isVisible && (
            <div className={`fixed inset-0 z-50 bg-overlayColor`}>
                <div className='relative'>
                    <div className='absolute top-6 right-6 z-[100]'>
                        <FontAwesomeIcon icon={faClose} className='text-4xl cursor-pointer text-mainColor' onClick={closeOverlay}/>
                    </div>
                </div>
                <div className='relative w-full h-screen inset-0 grid place-content-center'>
                    <Image
                        src={imageOverlay}
                        width={512}
                        height={512}
                        alt='image overlay'
                    />
                </div>
            </div>
        )
    }
    </>
  )
}

export default ServicesCards