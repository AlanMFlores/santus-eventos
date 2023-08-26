import React from 'react'

const ActionButton = ({action}) => {
  return (
    <button className='px-8 py-2 font-semibold duration-300 bg-mainColor hover:bg-secondaryColor text-black'>
        {action}
    </button>
  )
}

export default ActionButton