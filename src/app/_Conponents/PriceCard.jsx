import { IoCheckmark } from "react-icons/io5";
import ReUseHeading from "./reUseComponents/ReUseHeading";
import ReUseButton from "./reUseComponents/ReUseButton";

const PriceCard = ({title,Stiitle,price , pages , designCustom , responsiveDesign , contantUpload , sourceCode}) => {
  return (
    <div className=' text-white  w-full px-9 py-8 shadow-[#1c1e22_2px_2px_5px_4px] flex-col gap-y-3 rounded-xl flex'>
        <h2 className=" font-medium">
            {title}
        </h2>
        <span className=" font-medium ">
          {Stiitle}
        </span>
        <p className=" font-semibold text-[36px] ">
          ${price}
        </p>
        <div className=" flex-col mb-3 flex gap-y-4">
          <span className=" gap-3  flex items-center">
            <span className="   ">
            <IoCheckmark size={20} />
            </span >
          {pages} 
          </span>
          <span className={` ${!designCustom && "opacity-50" } gap-3   flex items-center`}>
            <span className="   ">
            <IoCheckmark size={20} />
            </span >
            Customization
          </span>
          <span className={` ${!responsiveDesign ? " opacity-50" : "opacity-100"} gap-3  flex items-center`}>
            <span className="   ">
            <IoCheckmark size={20} />
            </span >
            Responsive Design
          </span>
          <span className={` gap-3 ${!contantUpload && "opacity-50" }    flex items-center`}>
            <span className="   ">
            <IoCheckmark size={20} />
            </span >
            Content Upload
          </span>
          <span className={` gap-3 ${!sourceCode && "opacity-50"}    flex items-center`}>
            <span className="   ">
            <IoCheckmark size={20} />
            </span >
            Source Code
          </span>
        </div>
        <div className=" w-full">
          <ReUseButton title={"BUY NOW"} link={"#hireme"}  w=" w-full" />
        </div>
    </div>
  )
}

export default PriceCard