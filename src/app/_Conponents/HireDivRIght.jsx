"use client"

import { useState } from 'react'


const HireDivRIght = () => {

  const  [userMail , setUserMail] = useState({
    username : "",
    email : "",
    phoneNumber : "",
    subject : "",
    message : ""

  })



  const handleClick = ()=>{
    const mailtoLink = `mailto:?subject=${encodeURIComponent(userMail.subject)}&body=${encodeURIComponent(
      `Name: ${userMail.username}\nEmail: ${userMail.email}\nPhone Number: ${userMail.phoneNumber}\n\nMessage: ${userMail.message}`
    )}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  }


  return (
    <div className=' w-full  shadow-[#1c1e22_3px_0px_5px_4px] rounded-lg col-span-2  py-4'>
      <div className="  w-full col-span-2 px-[15px]  "> 
          <form onSubmit={(e)=>e.preventDefault()} className='  text-gray-400  flex flex-col gap-y-5'>
           <div className="   md:flex  items-baseline  gap-5">
           <label htmlFor=" userName" className=' w-full  flex flex-col gap-y-6  '>
             <span className=" flex capitalize  font-medium ">
             Your Name
                        </span>
            <input 
            className=' bodersha'
            type="text"
            name='userName'
            value={userMail.username}
            onChange={(e)=>setUserMail({...userMail ,  username : e.target.value})}
            id='userName'
            />
            
           </label><label htmlFor=" userName" className=' w-full  flex flex-col gap-y-6  '>
             <span className=" flex capitalize  font-medium ">
             Phone Number
                        </span>
            <input 
            className='bodersha'
            type="text"
            name='phoneNumber'
            id='phoneNumber'
            value={userMail.phoneNumber}
            onChange={(e)=>setUserMail({...userMail ,  phoneNumber : e.target.value})}
            // value={formik.values.userName}
            />
            
           </label>
           </div>
           <label htmlFor=" email" className=' w-full  flex flex-col gap-y-3  '>
             <span className=" flex capitalize  font-medium ">
             Email
                        </span>
            <input 
            className='bodersha' 
            type="email" 
            name='email'
            value={userMail.email}
            onChange={(e)=>setUserMail({...userMail ,  email : e.target.value})}
            />
           </label>
           <label htmlFor=" subject" className=' w-full  flex flex-col gap-y-3  '>
             <span className=" flex capitalize  font-medium ">
             Subject 
             
            </span>
            <input 
            className='bodersha' 
            type="text" 
            name='subject'
            value={userMail.subject}
            onChange={(e)=>setUserMail({...userMail ,  subject : e.target.value})}
            />
           </label>
           <label htmlFor=" message" className=' w-full  flex flex-col gap-y-3  '>
             <span className=" flex capitalize  font-medium ">
             Message
             
            </span>
            <textarea
             className='bodershames'
             value={userMail.message}
            onChange={(e)=>setUserMail({...userMail ,  message : e.target.value})}
             name='message'/>
           </label>
           <div className=''>

        <button onClick={handleClick}  className={`   transition 
         shadow-[#1c1e22_2px_4px_5px_4px]  ease-in-outout bg-webColor text-xs  sm:text-sm text-gray-400  w-full   px-6 hover:-translate-y-2  duration-300 flex items-center justify-center py-4 `} >
          <span className=' font-[500]'> SEND MESSAGE </span>
        </button>
     
    </div>
          </form>
             </div>
    </div>
  )
}

export default HireDivRIght