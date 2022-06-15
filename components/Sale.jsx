import React from 'react'

import { SpeakerphoneIcon } from '@heroicons/react/solid'

const s = {
  saleContainer: "w-full h-6 flex flex-row bg-sky-900 items-center justify-center text-white text-xs py-1",
}

const Sale = ({ saleInfo={message: "Holiday Sales! Save 25% off your subscription with code:", code: "holidays2021"} }) => {
  return (
    <div className={s.saleContainer}>
      <SpeakerphoneIcon className='w-4 mr-2' />
      <p>{saleInfo.message}</p>
      <span className='ml-2 font-thin underline underline-offset-2'>{saleInfo.code}</span>
    </div>
  )
}

export default Sale