import React from 'react'
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

const Page = ({currentPage}) => {
    const outlet=() => {
        switch (currentPage) {
            case "about":   
                 return <About/> 
                 case "portfolio":   
                 return <Portfolio/>
                 case "resume":   
                 return <Resume/>  
                 case "contact":   
                 return <Contact/> 
        
            default:
                return <About/>
        } 
    
    
    
    }


  return (
    <div>{outlet()}</div>
  )
}

export default Page