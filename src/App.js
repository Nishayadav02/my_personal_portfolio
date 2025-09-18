import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactPage from './components/ContactPage' 
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        /* --- COLOR CHANGE: Changed to new accent purple --- */
        backgroundColor: '#8a4fff' 
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>

      <ProjectCard
        id="project"
        className="odd"
        projectTitle="An Interview Prep App"
        projectDesc="A one-stop solution for your placement prep"
        projectLink="https://stance-sigma.vercel.app" // Vercel Link
        projectImg={require('./images/projectStance.jpg')}
      />

      <ProjectCard
        projectTitle="CogniCraft: Full-Stack AI Content Generation Platform"
        projectDesc="CogniCraft is a full-stack, AI-powered SaaS platform designed to streamline content creation and document management for creators and students."
        projectLink="https://congnicraft.vercel.app/" // Deployed Link
        projectImg={require('./images/CogniCraft.png')}
      />

      <ProjectCard
        className="odd"
        projectTitle="Heal With Yoga"
        projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
        projectLink="https://heal-with-yoga.vercel.app/" // Deployed Link
        projectImg={require('./images/Heal-With-Yoga.png')}
      />

      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      
      <ContactPage id = 'contact' /> 

      <Footer />
    </div>
    </>
  );
}

export default App;