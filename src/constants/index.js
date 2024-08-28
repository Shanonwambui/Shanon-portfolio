import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    numeral,
    jpmorgan,
    africa,
    admin,
    crypto,
    test,
    zan,
    simon,
    brian,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "C++ Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    
    {
      title: " Software Developer Intern",
      company_name: " Numeral IOT",
      icon: numeral,
      iconBg: "#E6DEDD",
      date: " Jan 2022 - April 2023",
      points: [
   
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Lightning Developer Bootcamp ",
      company_name: "Africa Free Routing",
      icon: africa,
      iconBg: "#383E56",
      date: " May2024 - June 2024",
      points: [
        "Tackled real-world challenges Africa faces and how the Lightning Network can address them",
        "Integrated the IBEX API to build a lightning network application",
        "Used the bitcoin lightning network to build a decentralized application that allows users to send and receive payments.",
        "Participating in code reviews and providing constructive feedback to other developers.",

                
      ],
    },
    {
      title: "Software Engineering Job Simulation",
      company_name: "JP Morgan Chase & Co.",
      icon: jpmorgan,
      iconBg: "#E6DEDD",
      date: "July 2024",
      points: [
   
        "Interface with a stock price data feed",
        "Use JPMorgan Chase & Co. frameworks and tools",
        "Display data visually for traders",
        "Open source contribution"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to develop a smart walking stick, but Shanon proved me wrong.",
      name: "Simon Manegene",
      designation: "Lecturer",
      company: "JKUAT",
      image: simon,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Shanon does.",
      name: "Brian Munene",
      designation: "CTO",
      company: "Numeral IOT",
      image: brian,
    },
    {
      testimonial:
        "Shanon is a great developer who is always willing to go the extra mile to get the job done.",
      name: "Zanelle Aoko",
      designation: "Electrical Engineering graduate",
      company: "JKUAT",
      image: zan,
    },
  ];
  
  const projects = [
    {
      name: "Admin Dashboard",
      description:
        "This Admin Dashboard consists of Light and Dark Mode, 4 different Charts, 3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
     
        {
          name: "Nivo Charts",
          color: "pink-text-gradient",
        },
        
      ],
      image: admin,
      source_code_link: "https://github.com/Shanonwambui/dashboard-react",
      demo: "https://chic-cupcake-be3def.netlify.app/ "
    },
    {
      name: "Crypto Dashboard",
      description:
        "This dashboard uses the CoinGecko API to fetch the latest crypto data. It has a search bar to search for a specific cryptocurrency and a chart to display the price history.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/Shanonwambui/crypto_dashboard",
      demo: "https://6649b53d1f6a900008100c00--jolly-concha-fcbe72.netlify.app/"
    },
    {
      name: "Test Automation",
      description:
        "Led a full-fledged automation project using AutomationExercise, a versatile platform designed to enhance automation skills for QA engineers of all levels.",
      tags: [
        {
          name: "selenium",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
      
      ],
      image: test,
      source_code_link: "https://github.com/Shanonwambui/Test-automation",
      demo: "https://www.automationexercise.com/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };