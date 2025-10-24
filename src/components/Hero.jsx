import { motion } from "framer-motion";

import { styles } from "../styles";
import { hero } from "../assets";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0   max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
     
        <div className="h-full flex flex-col justify-center " >
          <h1 className={`${styles.heroHeadText} text-[#1E1E1E]`}>
            Hi, I'm <span className='text-[#915EFF]'>Shanon</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2  text-[#1E1E1E]`}>
          I craft intuitive  and responsive <br className='sm:block hidden' />
           interfaces.  Blending front-end <br className='sm:block hidden' />
           magic with back-end logic to  <br className='sm:block hidden' />
           bring ideas to life.   </p>
        </div>
        {/* {<div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            src={hero}
            alt="hero"
            className="w-96 h-96 text-white object-cover"
          />
        </div>} */}
      </div>

     
  
    

      
    </section>
  );
};

export default Hero;