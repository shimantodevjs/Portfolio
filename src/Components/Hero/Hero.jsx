import React, { useEffect, useState } from 'react';
import './Hero.scss';
import { Link } from 'react-scroll'
import { LinkedIn, GitHub } from '@mui/icons-material';

const Hero = () => {
  const cvPdfUrl = "https://raw.githubusercontent.com/shimantodevjs/My-CV/main/cv.pdf";
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='hero' className={`hero ${animate ? 'show-animation' : ''}`}>
      <div className="wrapper">
        <div className="left">
          <img src="/assets/profile.jpg" alt="Profile" />
        </div>
        <div className="right">
          <p>Hello, I'm</p>
          <h1>Nahid Hasan</h1>
          <h2>Frontend Developer</h2>
          <div className="buttons">
            <a href={cvPdfUrl} target="_blank" rel="noopener noreferrer" download>
              <button className='cv'>Download CV</button>
            </a>
            <Link to='contact' smooth={true} duration={500} offset={-50} className='link'>
              <button className='info'>Contact Info</button>
            </Link>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/shimantodevjs/" target="_blank" rel="noopener noreferrer">
              <LinkedIn className='icon'/>
            </a>
            <a href="https://github.com/shimantodevjs" target="_blank" rel="noopener noreferrer">
              <GitHub className='icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

