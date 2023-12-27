import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import arrowImg from "./assets/arrow.png";
import linkedinImg from "./assets/linkedin.png"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const handleOpenGithub = () => {
    const githubUrl = "https://github.com/HuzaifaAshfaque";
    window.open(githubUrl, "_blank");
  };

  return (
    <>
      <div>
        <Navbar />
        <Profile handleOpenGithub={handleOpenGithub} linkedinImg={linkedinImg} />
        <About arrowImg={arrowImg} />
        <Experience arrowImg={arrowImg}/>
        <Projects handleOpenGithub={handleOpenGithub} arrowImg={arrowImg} />
        <Contact linkedinImg={linkedinImg}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
