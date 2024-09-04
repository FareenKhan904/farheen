"use client"
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import LatestDesignSlider from './LatestDesignSlider';
import Slider from "react-slick";


const LatestDesignSlider2 = () => {
  const NextArrow = (props) => {
    const { onClick } = props
    return (
      <div className=" hidden p-3 bg-webColor hover:text-webred rounded-full cursor-pointer duration-200  text-2xl lg:flex items-center justify-center z-20 absolute -left-4 top-[40%]" onClick={onClick}>
        <PiCaretLeftLight />
      </div>
    )
  }
  const PrevArrow = (props) => {

    const { onClick } = props
    return (
      <div className="p-3 hidden bg-webColor hover:text-webred rounded-full cursor-pointer duration-200  text-2xl lg:flex items-center justify-center z-20 absolute      -right-8 top-[40%]" onClick={onClick}>
        <PiCaretRightLight />
      </div>

    )

  }
  let settings = {
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 742,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        }
      }
    ]
    ,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };

  return (
    <div className="   text-white w-full  flex  flex-col gap-3    " id="design">
      <Slider  {...settings} className="slider-container">
        <div className=' fle '>
        <LatestDesignSlider 
        para="Front view woman wearing trucker hat."
        topPara={"GAllery"} 
        img="/card1.png"
        title = "Front End Web Animation"
        client = "Azzam Nidal"
        date = "6/22/2024"
        service = "Web Animation"
        budget = "$700"
        link = "https://nexus-frontend-puce.vercel.app/"
         />
        </div>
        <div className=' 
        '>
        <LatestDesignSlider gap={true} topPara={"GAllery"} 
        img="/card2.png"
        para="Portrait of pretty blonde model sitting on table. "
        title = "Static Web Development"
        client = "Stacy"
        date = "5/20/2024"
        service = "Web Application"
        budget = "$100"
        link = "https://nexus-frontend-puce.vercel.app/"
        />

        </div>
        <div>
        <LatestDesignSlider topPara={"GAllery"} 
        img="/card3.png"
        para="Portrait of pretty blonde model sitting on table. "
        title = "Game Web Application"
        client = "Mack Wade"
        date = "8/01/2024"
        service = "Web Animation"
        budget = "$800"
        link = "https://teamunitefn-mdx.vercel.app/"
        />
          
        </div>
        

      </Slider>
    </div>
  );
}
export default LatestDesignSlider2