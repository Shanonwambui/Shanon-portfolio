import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Passionate about crafting innovative software solutions, I bring expertise in TypeScript, JavaScript, Java, Python, C++, and frameworks like React, Angular, Springboot, Django and Matlab. Let's work together to turn your vision into a reality!
      </motion.p>
     <div className="flex sx:flex-col gap-6">
      
     <motion.button
      variants={textVariant(0.2)} // Use textVariant as the default variant
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.1 }} // Add this line to apply zoom effect on hover
      className='text-white font-bold h-[50px]  px-12 rounded-[50px] shadow-button mt-10 bg-[#915EFF] '
    >
       <a href="https://www.linkedin.com/in/wambui-shanon" target="_blank" rel="noreferrer"> LinkedIn </a>
    
    </motion.button>


    <motion.button
      variants={textVariant(0.2)} // Use textVariant as the default variant
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.1 }} // Add this line to apply zoom effect on hover
      className='text-white font-bold h-[50px]  px-12 rounded-[50px] shadow-button mt-10 bg-[#915EFF] '
    >
       <a href="https://github.com/Shanonwambui/resume/blob/main/Shanon-resume-2024.pdf" target="_blank" rel="noreferrer"> Resume  </a>
    
    </motion.button>

     </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");