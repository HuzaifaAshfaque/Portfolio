import profileImg from "../assets/profile-pic.png"
import githubImg from "../assets/github.png"
import resumePDF from '../assets/resume.pdf';
import { Link as ScrollLink } from 'react-scroll';



const Profile = ({handleOpenGithub,linkedinImg,handleOpenLinkedIn}) => {
  /**
   * The function `resume` opens a new window with the resume.
   */
  const handleViewResume = () => {
    // Specify the path to your resume file in the assets folder
    const resumePath = resumePDF

    // Use window.open to open the PDF in a new tab
    window.open(resumePath, '_blank');
  };

  


  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img src={profileImg} alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Huzaifa Ashfaque</h1>
          <p className="section__text__p2">Fullstack Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={handleViewResume}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
            >
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact info
              </ScrollLink>
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedinImg}
              alt="My LinkedIn profile"
              className="icon"
              onClick={handleOpenLinkedIn}
            />
            <img
              src={githubImg}
              alt="My Github profile"
              className="icon"
              onClick={handleOpenGithub}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
