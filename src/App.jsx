import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Hero2 } from "./components";


const App= () => {


  return (
    <BrowserRouter>
    <div className='relative z-0 bg-tertiary'>
      <div className=''>
        <Navbar />
         <div className='relative z-0'>
             <Hero2 />
        <StarsCanvas />

         </div>
     

      {/* {  <Hero />} */}
      </div>
      <About />
      <Experience />
     {/* { <Tech />} */}
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
     <Contact />
        
      </div>
    </div>
  </BrowserRouter>
  
 
  )
}

export default App
