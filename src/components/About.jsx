import aboutImg from "../assets/about-pic.png";
import experienceImg from "../assets/experience.png";
import educationImg from "../assets/education.png";
import { Link as ScrollLink } from 'react-scroll';


const About = ({ arrowImg }) => {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={aboutImg} alt="Profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={experienceImg}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  Fresher  <br />
                  Fullstack Development 
                </p>
              </div>
              <div className="details-container">
                <img src={educationImg} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>Diploma in Computer Science and Engineering</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                I have recently completed my final year in Computer Science at
                Government Polytechnic Unnao, and I also successfully finished
                my summer training. Currently, I am participating in an
                apprenticeship at Techpile Technology. Throughout my academic
                journey, I gained practical experience in web development by
                creating a website using Python with Django. My skill set
                encompasses HTML, CSS, JavaScript, Bootstrap, Git, GitHub,
                DevOps, Python, SQL and Django. This combination of academic
                knowledge and hands-on experience has provided me with a robust
                foundation in computer science, and I am enthusiastic about
                applying and further developing my skills in real-world
                scenarios.
              </p>
            </div>
          </div>
        </div>
        <ScrollLink to="experience" smooth={true} duration={500}>
        <img
          src={arrowImg}
          alt="Arrow icon"
          className="icon arrow"
        />
        </ScrollLink>
      </section>
    </>
  );
};

export default About;
