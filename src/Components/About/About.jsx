import './About.scss'
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


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

                <div className="wrapper">
                  <span className="educationSection">
                    <a href="http://eng.unn.ru/about/academic-units/institute-of-information-technology-mathematics-and-mechanics" target="_blank" rel="noopener noreferrer">
                       <SchoolIcon />
                       <h3>Education</h3>
                       <p>(B.Sc.) Bachelors Degree <br />Informatics & Information Technology</p>
                    </a>
                  </span>

                  <span className="educationSection">
                    <a href="http://eng.unn.ru/" target="_blank" rel="noopener noreferrer">
                       <AccountBalanceIcon />
                       <h3>University</h3>
                       <p>Lobachevsky University, Russia<br />QS Ranking: 751-800</p>
                       
                    </a>
                  </span>
                </div>

                  <div className="aboutDesc">
                      <p>I'm a passionate front-end developer who loves turning ideas into interactive digital realities. My focus is on creating user-friendly web experiences that seamlessly merge design and functionality. With a foundation in ReactJs, I'm dedicated to making the web a more captivating place, <br /> "one pixel at a time"</p>
                      {/* <h4>More about me</h4>
                      <div className="buttons">
                      <Link to="/about-english">
                        <button>English</button>
                      </Link>
                      <Link to="/about-russian">
                        <button>Russian</button>
                      </Link>
                      </div> */}
                  </div>
               </div>
           </div>
      </div>
    </div>
  )
}

export default About
