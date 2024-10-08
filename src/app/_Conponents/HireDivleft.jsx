import Image from 'next/image'
import React from 'react'
import SocialInfo from './SocialInfo'



const HireDivleft = () => {
    
  return (
    <div className='  rounded-lg shadow-[#1c1e22_3px_0px_5px_4px] flex flex-col items-center w-full   gap-7 px-8 py-8 '>
        <div className=" w-full overflow-hidden">
             <Image src="/hireimg.jpg" className='  w-full rounded-lg hover:scale-105 duration-300 transition-all ease-in-out    ' alt='Logo'
              width={350}
              height={300}
            />
        </div>
        <div className=" text-gray-400 font-normal flex-col justify-center w-full  flex gap-5">
            <h2 className=' text-gray-100 font-bold text-[clamp(20px,5vw,26px)]'>Farheen</h2>
            <h3>Frontend Web Developer</h3>
            <h2 className=' font-normal text-[18px]'>I am available for freelance & Remote work.</h2>
            <span>
                <p className='' >Phone:
                    <span className=''>
                +92-3554235904
                    </span>
                </p>
                <p className='' > Email: 
                    <span className=''>
                    Farheensamandar94@gmail.com
                    </span>
                </p>
            </span>
            <SocialInfo/>
            
        </div>
    </div>
  )
}

export default HireDivleft