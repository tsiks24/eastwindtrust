import React from 'react'
import { navLinks } from '@/lib/constants'
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import Image from 'next/image';



function Head() {
  return (
    <div className='flex flex-col w-full justify-center items-center py-[40px] cursor-pointer'>
        <div className='flex flex-col lg:w-[80%] w-[95%] justify-center items-center py-[40px]'>
             <div className='w-full flex flex-row'>
                     <div className='flex-1'>

                     </div>
                 <div className='flex-3'>

                    {navLinks.map((link,id)=>{

                   return(
                     <Link key={id} href={link.href} 
                    
                     className={ "py-4 px-4 text-[18px] hover:bg-blue-100 rounded-3xl hover:text-blue-500 hover:py-4 "}
                     >
                     {link.name}
                     </Link>
                   );
                     })}

                     </div>
                     <div className='flex-2 flex justify-end gap-10 h-full'>
                            <FaFacebookSquare className='text-blue-500 h-[20px] w-[20px] '/>
                            <FaInstagram  className='text-blue-500 h-[20px] w-[20px]' />
                            <BsTwitterX  className='text-blue-500 h-[20px] w-[20px]'/>
                            <IoLogoYoutube  className='text-blue-500 h-[20px] w-[20px]' />
                           
                            <div className='flex-row flex gap-5 '> <p className='text-gray-300'>|</p><MdOutlineLocalPhone className='h-[30px]  w-[30px] text-blue-500'/>  <p className='hover:text-blue-500'>+263 771 944 499</p>   </div>
                            
                     </div>

             </div> 
            
         </div>
          <div className='w-full flex -flex-row'>
                        <div className='flex-1 flex justify-end pr-[40px]'>
                            <h1 className='text-[60px] text-blue-500 font-medium'>Find Your Home</h1>
                        </div>
                        <div className='flex-1 bg-blue-100 rounded-tl-2xl flex justify-center items-center gap-10' >
                               <h1 className='text-[20px] font-bold'>Need help choosing your stand</h1>
                               <div className='border-blue-400 p-4 rounded-full border-4'><p className='font-bold text-blue-400'>Let Us Call You</p></div>
                        </div>
             </div>
    </div>
  )
}

export default Head