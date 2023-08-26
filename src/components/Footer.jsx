import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex justify-center py-20 border-t-4 border-gradient bg-black'>
        <Image
            src={"/assets/images/santus-isologotipo-white.png"}
            height={128}
            width={128}
            alt='santus isologotipo white'
        />
    </div>
  )
}

export default Footer