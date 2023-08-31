import React from 'react'
import data from './dataEnglish'
import './AboutEnglish.scss'
import {ArrowBackIos , KeyboardArrowUp} from '@mui/icons-material';
import { Link } from 'react-scroll';;
import { Link as RouterLink } from 'react-router-dom';

const AboutEnglish = () => {
  return (
        <div className='aboutEnglish'>
      
      <div className="wrapper">
        <RouterLink to='/' id='back' className='back'><ArrowBackIos/> Back to Homepage</RouterLink>
            {data.map((item , index)=>(
               <div 
                   key={item.id}
                   className={`container ${index % 2 === 1 ? 'reversed' : ''}`}
               >
                 <div className='left'>
                  <h2>{item.title}</h2>
                  <img src={item.photo} alt="" />
                 </div>
                 <div className='right'>
                   <div className='desc'>
                       <p>{item.desc}</p>
                   </div>
                 </div>       
               </div>     
            ))}

            <Link to="back" smooth={true} duration={500} className="toTop" offset={-20}>
                  <KeyboardArrowUp /> To the Top
            </Link>       
       </div>
    </div>
  )
}

export default AboutEnglish
