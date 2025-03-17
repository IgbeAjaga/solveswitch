import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT SOLVESWITCH' /> <br />
            <br />
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Title title='The digital agency that you need!' className='title-bg' />
            </motion.div>
          </div>
          
          
          

          <div className='content flex1'>
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className='left w-40 py'
            >
              
              <img src='/images/s5.jpg' alt='Img' className='round' width='100%' height='100%' />

            </motion.div>
            <div className='right w-60 ml'>
              <TitleSm title='Turning your business ideas into smart digital products' />
              <p className='desc-p'>
                At SolveSwitch, we specialize in transforming innovative ideas into scalable, smart digital solutions. With many years of experience, we have helped businesses harness technology to streamline operations, enhance customer experiences, and drive growth.
                <br /><br />
                Our expertise spans software development, IT consultancy, cybersecurity, digital branding, and more, ensuring that businesses stay ahead in the fast-evolving digital landscape.
                <br /><br />
                We are committed to excellence, innovation, and customer satisfaction, delivering solutions that solve real-world challenges and empower businesses to scale effortlessly.
              </p>
              <div className='grid-3'>
                <div className='box'>
                  <h5 className='green'>Unique</h5>
                  <h3>Modern technologies</h3>
                </div>
                <div className='box'>
                  <h5 className='green'>Many</h5>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h5 className='green'>Clear</h5>
                  <h3>Client focus</h3>
                </div>
              </div>
            </div>
            
          </div>

          <div className='content flex'>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className='left w-40 py'
            >
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </motion.div>
            <div className='right w-60 ml'>
              <TitleSm title='Our Mission' />
              <br />
              <p className='desc-p'>
                At SolveSwitch, we are committed to transforming business ideas and problems into smart digital products that drive innovation and success.
                <br /><br />
                We believe in cutting-edge technology, seamless user experiences, and data-driven solutions to empower businesses in the digital age.
                <br /><br />
                Our goal is to simplify complexity, enhance efficiency, and create impactful digital solutions that help businesses scale effortlessly.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className='content flex'>
            <div className='left w-60 py'>
              <TitleSm title='Our Vision' />
              <br />
              <p className='desc-p'>
                Our vision is to be the leading digital transformation partner for businesses globally, pioneering innovative solutions that bridge the gap between technology and business growth.
                <br /><br />
                We strive to create an ecosystem where businesses leverage digital advancements to achieve long-term sustainability, efficiency, and competitive advantage.
              </p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className='right w-40 ml'
            >
              <img src='/images/s6.jpg' alt='Img' className='round' width='100%' height='100%' />
            </motion.div>
          </div>

          {/* Core Values Section */}
          <div className='content flex'>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className='left w-40 py'
            >
              <img src='/images/b2.jpg' alt='Img' className='round' width='100%' height='100%' />
            </motion.div>
            <div className='right w-60 ml'>
              <TitleSm title='Our Core Values' />
              <br />
              <ul className='desc-p'>
                <li><strong className='green'>Innovation:</strong> We embrace creativity and leverage cutting-edge technology to deliver top-tier digital solutions.</li>
                <li><strong className='green'>Integrity:</strong> Transparency, honesty, and ethical practices guide everything we do.</li>
                <li><strong className='green'>Customer-Centricity:</strong> Our solutions are designed to enhance user experiences and meet our clients' unique needs.</li>
                <li><strong className='green'>Excellence:</strong> We are committed to delivering high-quality services that exceed expectations.</li>
                <li><strong className='green'>Collaboration:</strong> We believe in teamwork, both internally and with our clients, to achieve remarkable results.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
