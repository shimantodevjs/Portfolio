import './Projects.scss'
import data from './data'

const Projects = () => {

  const toggleDescription = (projectId) => {
    setExpandedDescriptions((prevExpanded) => ({
      ...prevExpanded,
      [projectId]: !prevExpanded[projectId],
    }));
  };

  return (
    <div className='projects' id='projects'>
      <div className="wrapper">
        <p>Browse my recent</p>
        <h1>Projects</h1>
            {data.map((item , index)=>(
               <div 
                   key={item.id}
                   className={`projectCard ${index % 2 === 1 ? 'reversed' : ''}`}
               >
                 <div className='left'>
                  <h2>{item.title}</h2>
                  <img src={item.image} alt="" />
                  <div className="btns">
                    <button>
                      <a href={item.github} target="_blank" rel="noopener noreferrer">Github</a>
                    </button>
                    <button>
                      <a href={item.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                    </button>
                  </div>
                 </div>
                 <div className='right'>
                   <div className='desc'>
                           {item.desc.length <= 100 ? item.desc : item.desc.substring(0, 300)}
                   </div>
                   <div className="tools">                     
                           {Object.values(item.tools).map((tool, index) => (
                            <span key={index}>{tool}</span>
                            ))}
                   </div>
                 </div>       
               </div>     
            ))}         
       </div>
    </div>
  )
}

export default Projects
