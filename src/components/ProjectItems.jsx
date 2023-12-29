import React from 'react';
import { useDispatch } from 'react-redux';
import { projectActions } from '../store/Project';

const ProjectItems = ({project}) => {
    console.log(project.projectimg)
    const dispatch = useDispatch();

    const handleGithubFetch = () => {
        dispatch(projectActions.githubFetch(project.id));
      };

    const handleProjectFetch = () => {
        dispatch(projectActions.githubProjectFetch(project.id));
      };

  return (

    <>
      <div className="details-container color-container">
        <div className="article-container">
          <img src={project.projectimg} alt="Project 1" className="project-img" />
        </div>
        <h2 className="experience-sub-title project-title">{project.projectname}</h2>
        <div className="btn-container">
          <button
            className="btn btn-color-2 project-btn"
              onClick={handleGithubFetch}
          >
            Github
          </button>
          <button
            className="btn btn-color-2 project-btn"
              onClick={handleProjectFetch}
          >
            Live Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectItems;
