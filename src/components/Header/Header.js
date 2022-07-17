import React from 'react'
import {AiOutlineUser} from "react-icons/ai"
import {BsSearch, BsBookmark, BsBag} from "react-icons/bs"

const Header = () => {
  return (
    <section className='relative block w-[90%] p-2 m-auto'>
       <div className='flex justify-between items-center w-full'>

         <div className = "block relative">
            <h2 className='font-thin p-2 text-xl text-white'>TANN <span>TRIM</span></h2>
         </div>

         {/* Icons */}
         <div className = "flex justify-between items-center text-white">
          <span className = "pr-5 text-xl">{<BsSearch />}</span>
          <span className='pr-5 text-xl'>{<AiOutlineUser />}</span>
          <span className='pr-5 text-xl'>{<BsBookmark />}</span>
          <span className='pr-5 text-xl'>{<BsBag />}</span>
         </div>

       </div>
    </section>
  )
}

export default Header