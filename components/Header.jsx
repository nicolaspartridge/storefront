import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const s = {
  container: "w-full h-[60px] flex flex-row items-center justify-center z-10 absolute top-0 left-0 text-sm",
  signup: "text-white text-sm font-semibold bg-red-400 py-3 px-4 rounded-md ml-4 hover:cursor-pointer hover:bg-red-300 transition-colors duration-300",
  section: "flex flex-row items-center justify-between mr-48 ml-48",
  row: "flex flex-row items-center justify-between",
  link: "flex flex-row items-center justify-between mx-4 cursor-pointer text-black/60 hover:opacity-50 transition-opacity duration-300",
}

const Header = () => {
  return (
     <div className={s.container}>
      <div className={s.row}>
        <div className={s.section}>
          <span className={s.link}>Solutions <ChevronDownIcon className='w-6 ml-2' /></span>
          <span className={s.link}>Pricing</span>
          <span className={s.link}>Company <ChevronDownIcon className='w-6 ml-2'/></span>
          <span className={s.link}>Library</span>
          <span className={s.link}>Contact</span>
        </div>
        <div>
          <span>Sign in</span>
          <span className={s.signup}>Sign up</span>
        </div>
      </div>
     </div>   
  )
}

export default Header