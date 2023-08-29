import './About.scss'
import SchoolIcon from '@mui/icons-material/School';

const About = () => {

  return (
    <div className='about' id='about'>
      <div className="wrapper">
           <p>Get to know more</p>
           <h1>About Me</h1>
           <div className="container">
               <div className="left">
                <img src="/assets/about.jpg" alt=""/>
               </div>
               <div className="right">
                  <div className="education">
                       <SchoolIcon />
                       <h3>Education</h3>
                       <p>B.Sc. Bachelors Degree <br /> Information Technology</p>
                  </div>
                  <div className="aboutDesc">
                      <p>I'm a passionate front-end developer who loves turning ideas into interactive digital realities. My focus is on creating user-friendly web experiences that seamlessly merge design and functionality. With a foundation in ReactJs, I'm dedicated to making the web a more captivating place, <br /> "one pixel at a time"</p>
                      <h4>More about me</h4>
                      <div className="buttons">
                        <button>English</button>
                        <button> Russian</button>
                      </div>
                  </div>
               </div>
           </div>
      </div>
    </div>
  )
}

export default About
