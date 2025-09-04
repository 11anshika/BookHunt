import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.png";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHunt</h2>
            <p className='fs-17'>BookHunt helps readers discover and explore thousands of books. 
              Search by title, author, or subject and find your next favorite read in seconds.</p>
            <p className='fs-17'>Our mission is to make book discovery easy and enjoyable. Explore curated collections, trending books, and detailed information about each title with BookHunt.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
