import React from 'react'

const About = () => {
  return (
    <div class=" flex flex-1">
    <div class="about-me__info row">
      <div class="about-me__info--container">
        <figure class="about-me__picture--mask">
          <img src="./assets/kevins-profile-pic.PNG" class="about-me__picture" alt="Profile picture"/>
        </figure>
        <h1 class="about-me__info-title">
          Hey! I'm <span class="text--purple"> Kevin Rivera </span> &#128075;
        </h1>
        <p class="about-me__info--para">
          Aspiring <strong class="text--purple"> Front-End web Software Engineer </strong> leveraging an entrepreneur
          background to build a more refined user experience on the web. Will earn a certificate in  full
          stack web development, A Program offered from the university of california, Berkeley and on november 29th, 2022
          I shall recieve my certification. At the end of the course I will be very comfortable with the fundamentals
          of the following: Javascript, CSS, React, and responsive web design. I've been Known to be  problem solver that is
          passionate about developing apps, with a clear-cut vision on mobile-first design and development. Every
          project that I created or collaborated with, my aim was to engage the target audience at the moment. I'm
          excited to utilize my skills that I will obtain throughout the  course, to  soon be apart of a fast
          paced, goal-driven team, to build better experiences on the web.
        </p>
        <div class="about-me__links">
          <a href="" class="about-me__link">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="" class="about-me__link">
            <i class="fab fa-github"></i>
          </a>
          <a href="" class="about-me__link">
            <i class="far fa-envelope"></i>
          </a>
          <a href="" class="about-me__link">
            <i class="fas fa-file-pdf"></i>
          </a>
        </div>
      </div>
      <figure class="about-me__img--container">
        <img src="./assets/undraw_websites.svg" class="about-me__img" alt=""/>
      </figure>
    </div>
  </div>
  )
}

export default About