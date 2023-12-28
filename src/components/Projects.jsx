import ProjectImg1 from "../assets/project-1.png"
import ProjectImg2 from "../assets/project-2.png"
import ProjectImg3 from "../assets/project-3.png"
import { Link as ScrollLink } from 'react-scroll';



const Projects =({handleOpenGithub,arrowImg})=>{

  const openProject = () => {
    const githubUrl = "https://github.com/HuzaifaAshfaque/favcart";
    window.open(githubUrl, "_blank");
  };
    return (
    <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={ProjectImg1}
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Project One</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={handleOpenGithub}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={openProject}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={ProjectImg2}
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Project Two</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={handleOpenGithub}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={handleOpenGithub}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={ProjectImg3}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Project Three</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={handleOpenGithub}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={handleOpenGithub}
                >
                  Live Demo
                </button>
              </div>
            </div>
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