import React from 'react'
import '../css/about.css'
import coder from '../img/coder.jpg'

function About() {
  return (
    <div>
      <section className="about-us">
        <div className="about">
          <img src={coder} className='pic' alt='coder'/>
          <div className="text">
            <h2>About Us</h2>
            <h5>Front-end Developer & <span>Designer</span></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
            <div className="data">
              <a href="/#" className="hire">Hire Me</a>
            </div>
          </div>
        </div>
      </section></div>
  )
}

export default About