
import { Link as ScrollLink } from 'react-scroll';
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../store/Project";
import ProjectItems from "./ProjectItems";



const Projects =({arrowImg})=>{
  const projects = useSelector(store=>store.project);
  // console.log(projects)
  const dispatch=useDispatch(); 
    return (
    <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {projects.map(project=>
              <ProjectItems key={project.id} project={project}/>
              )}

          </div>
        </div>
        <ScrollLink to="contact" smooth={true} duration={500}>
        <img
          src={arrowImg}
          alt="Arrow icon"
          className="icon arrow"
        />
        </ScrollLink>
      </section>
    );
}

export default Projects;