import checkmarkImg from "../assets/checkmark.png"


const Experience = ({arrowImg}) => {
  return (
    <>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>React</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Bootstrap</h3>
                    <p>Experienced</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Python</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Django</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImg}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Github</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowImg}
          alt="Arrow icon"
          className="icon arrow"
          onClick="location.href='./#projects'"
        />
      </section>
    </>
  );
};
export default Experience;
