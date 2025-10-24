import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Hero2 = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation check
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields.");
      return;
    }

      // Regex to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    alert("Please enter a valid email address.");
    return;
  }

    setLoading(true);

     emailjs
    .send(
      'service_8ws17jj',
      'template_5kihcga',
      {
        from_name: form.name,
        to_name: "Shanon",
        from_email: form.email,
        to_email: "shanonwambui24@gmail.com",
        message: form.message,
      },
      'aDdbZfRRdsDpRE6Ft'
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );

  };

  return (
    <div
      className={`md:h-screen flex xl:flex-row w-full flex-col md:-mt-8 mt-8 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex md:w-1/2  md:p-8 md:text-start     text-center justify-center items-center  '
      >
     <h1 className={`${styles.heroHeadText} mb-28  text-[#1E1E1E]`}>
           Engineering reliable software<span className='text-[#915EFF]'> for a connected world</span>
          </h1>
        

 
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 md:w-1/2   xl:h-auto md:h-[450px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Hero2, "hero2");