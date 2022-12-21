import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="row footer__row">
      <a href="#" className="footer__anchor"> 
        <figure className="footer__logo">
          <img src="" className="footer__logo--img"/>
        </figure>
        <span className="footer__logo--popper">
          top
          <i className="fas fa-arrow-up"></i> 
        </span>
      </a>
      <div className="footer__social--list">
        <a href=""  className="
        footer__social--link
        link__hover-effect
        link__hover-efect--white
        " >Github</a> 
        <a href="" className="
        footer__social--link
        link__hover-effect
        link__hover-efect--white
        " target="_blank">LinkedIn</a> 
        <a href="mailto:kevthebarber14@gmail.com" className="
        footer__social--link
        link__hover-effect
        link__hover-efect--white
        " target="_blank">Email</a> 
        <a href="./assets/Resume-5.pdf" className="
        footer__social--link
        link__hover-effect
        link__hover-efect--white
        " target="_blank">Resume</a>  
      </div> 
      <div className="footer__copyright">Copyright © 2022 Kevin Rivera </div>
    </div>
      
  </footer>
  
  )
}

export default Footer