import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'

const Divider = () => {
  return (
    <div className='w-full flex justify-center items-center py-20'>
        <FontAwesomeIcon icon={faChevronDown} className='text-4xl text-mainColor'/>
    </div>
  )
}

export default Divider