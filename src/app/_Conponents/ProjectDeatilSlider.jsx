"use client"

import Image from "next/image";
import { useSelector } from "react-redux";

const Projectdeslider = () => {
  const {details } = useSelector((state) => state.store)
 

  return (
    <div className="  text-white    mx-auto    " >
      
       
        <div className="  flex px-4 rounded-lg justify-center ">
        <Image src={details.img} className='  w-full  rounded-md ' alt='project'
                    width={600}
                    height={600}
                />
                
        </div>
       
    </div>
  );
}
export default Projectdeslider