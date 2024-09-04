'use client'
import { PiCaretLeftLight } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux'
import { DynamicDAtaFun } from '../redux/StoreSlice';
import Projectdeslider from './ProjectDeatilSlider'
import Projectdetailspan from './reUseComponents/Projectdetailspan'
import Blackline from './Blackline';
import Link from 'next/link';
const ProjectDetail = () => {

  const { dynamicRouteCOn , details } = useSelector((state) => state.store)
  const dispatch = useDispatch()
 
  return (
    <div className="">
      {
        dynamicRouteCOn && (
          <div className=' fixed h-screen overflow-auto py-16 flex items-center justify-center z-50 top-0 left-0 w-full    bg-webColor'>
           
           <div className= "  text-gray-300  w-[90%] md:w-[85%] p-4  md:p-11 relative bg-webColor rounded-lg shadow-[#1c1e22_2px_12px_18px_20px]  ">

            {/* btn */}
           <div className=" absolute px-4 py-2 font-[600]   bg-webColor shadow-[#1c1e22_2px_12px_18px_20px] text-webred rounded-full hover:scale-105  cursor-pointer duration-200  text-2xl lg:flex items-center justify-center z-20 right-3   top-3" onClick={()=>dispatch(DynamicDAtaFun())}>
        x
      </div>

             <div className="  w-full">
               
               {/* div1/ */}
               <div className=" grid gap-4 grid-cols-1 lg:grid-cols-2 ">
                <div className=" relative  grid-cols-1">  
                  
                <Projectdeslider/>
                </div>
                <div className=" flex flex-col gap-6  text-gray-300">
                  <h2 className=' font-bold text-[clamp(24px,5vw,34px)]'>{details.Title}</h2>
                  <p>{details.para}</p>
                  <div className=" grid grid-cols-1 gap-3 lg:grid-cols-2">
                    <Projectdetailspan name={"Client"} detail={details.client} />
                    <Projectdetailspan name={"Date"} detail={details.date} />
                    <Projectdetailspan name={"Services"} detail={details.service} />
                    <Projectdetailspan name={"Budget"} detail={details.budget} />
                  </div>
                </div>

               </div>
           <Blackline/>
           <Link href={details.link}  target='_blank' className='px-[15px] py-[4px] border-2 rounded-[10px] border-red-500'>
           Preview Site
           </Link>
          
             </div>

           </div>
          </div>
        )
      }

    </div>
  )
}

export default ProjectDetail