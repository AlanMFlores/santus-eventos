import React from 'react'
import Image from 'next/image'

const GalleryGrid = () => {
  return (
    <div className='mx-32 mb-20 grid grid-cols-3 gap-4'>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-1.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-2.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-3.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-4.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-5.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-6.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-7.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-8.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-9.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-10.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-11.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
        <div>
            <Image
                src={"/assets/images/gallery/gallery-12.jpg"}
                height={240}
                width={384}
                alt="gallery image"
            />
        </div>
    </div>
  )
}

export default GalleryGrid