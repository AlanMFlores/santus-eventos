import React from 'react'

const ProposalCard = ({title, description}) => {
  return (
    <div className='bg-darkColor w-[320px] px-6 pb-6 pt-8 rounded-br-3xl rounded-bl-3xl border-t-4 border-mainColor'>
        <h3 className='text-center text-mainColor text-2xl mb-6'>{title}</h3>
        <p className='text-center font-light'>{description}</p>
    </div>
  )
}

export default ProposalCard