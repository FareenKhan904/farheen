"use client"
import React, { useEffect } from 'react'
import Container from './Container'
import Image from 'next/image'
import ProjectDetail from './ProjectDetail'
import { useScroll, motion, useTransform } from 'framer-motion';

const HeroSec = () => {

  const { scrollY } = useScroll();

  const imageVariants = {
    hidden: { y: 50, opacity: 0 }, // Start position below and invisible
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.2   , // Adjust the duration of the animation
        ease: "easeOut"
      }
    } // End position at its original place and fully visible
  };

  return (
    <div className="" id='hero'>
      <ProjectDetail />
      <Container className=' text-white mb-[30%] md:mb-[24%]  relative  flex w-full justify-center'>

        <div className=" h-full   flex justify-center relative ">

          <div className="flex-col  flex  justify-center  text-center ">
           
            <h3 className=' text-[clamp(12px,5vw,36px)] text-darkcolor playfair'>👋my name is Farheen & I am a freelance</h3>
            <h1 className=' z-10  font-[900] archivor  text-[clamp(30px,9vw,130px)] '>Web Developer</h1>
            <h2 className=' playfair text-[clamp(30px,9vw,130px)]  oul'>Frontend Dev</h2>
            <p className=' text-xs  lg:text-lg text-darkcolor  sm:text-right'>based in Gilgit, Pakistan ❤️</p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}


              className=" absolute     z-0  top-[-19%]    md:top-[-20%]  flex justify-center  items-center flex-col  w-full  ">
              <Image src="/heroimg.png" priority className=' h-auto w-[50%]  sm:w-[40%] md:w-[40%]   ' alt='Logo'
                width={1000}
                height={1000}
              />
            </motion.div>
          </div>


        </div>
      </Container>
    </div>
  )
}

export default HeroSec
