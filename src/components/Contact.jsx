import emailImg from '../assets/email.png'

const Contact =({linkedinImg,handleOpenLinkedIn})=>{
    return(
        <>
        <section id="contact">
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img
                src={emailImg}
                alt="Email icon"
                className="icon contact-icon email-icon"
              />
              <p>
                <a href="mailto:siddiqui8573@gmail.com">siddiqui8573@gmail.com</a>
              </p>
            </div>
            <div className="contact-info-container">
              <img
                src={linkedinImg}
                alt="LinkedIn icon"
                className="icon contact-icon"
              />
              <p>
                <a href='/' onClick={handleOpenLinkedIn}>LinkedIn</a>
              </p>
            </div>
          </div>
        </section>
        </>
    );
}

export default Contact;