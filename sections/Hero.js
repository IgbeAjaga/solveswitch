import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo } from "@/components/common/Title"
import { Brand } from "@/components/router"
import React from "react"
import { motion } from "framer-motion"

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
}

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <TitleLogo title='Switch' caption='Solve' className='logobg' />
            <h1 className='hero-title'>POWERING NEXT-GEN DIGITAL SOLUTIONS</h1>
          </motion.div>

          <motion.img 
            src="/images/s6.jpg" 
            alt="Hero Image" 
            style={{ width: "100%", height: "auto" }} 
            initial="hidden" 
            animate="visible" 
            variants={fadeIn} 
          />
        </div>
      </section>

      <section className='hero-sec'>
        <div className='container'>
          <motion.div className='heading-title' initial="hidden" animate="visible" variants={fadeIn}>
            <Title title='Your Ultimate Digital Partner' />
            <p>
              At SolveSwitch, we bring innovation and expertise together to elevate your digital presence. 
              From seamless solutions to cutting-edge strategies, we ensure your success with every project. 
              Experience effortless growth with a team dedicated to your vision.
            </p>
          </motion.div>

          <motion.div className='hero-content grid-4' initial="hidden" animate="visible" variants={fadeIn}>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />
    </>
  )
}

export default Hero
