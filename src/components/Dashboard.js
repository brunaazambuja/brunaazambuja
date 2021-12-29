import React from "react";
import { FiMail, FiArrowUp } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

import back from '../assets/vista.jpg';
import landingMe from '../assets/perfil.jpg';
import { Container, PresentationCard, Landing, Footer } from './styles/Dashboard';
import Reviews from "./Reviews";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const Dashboard = () => {
  return (
    <Container>
      <Landing>
        <img src={back} alt="back" className="back" />
        <PresentationCard>
          <img src={landingMe} alt="" />
          <h1>Bruna Azambuja</h1>
          Engenheira de Software e Entusiasta de Inteligência Artificial
          <div className="icons">
            <FaLinkedinIn onClick={() => window.open('https://br.linkedin.com/in/bruna-azambuja-756a971a5/')} /> 
            <FiMail onClick={() => window.open('mailto:brunazambuja@outlook.com')}/> 
            <FaGithub onClick={() => window.open('https://github.com/brunaazambuja')} /> 
            <FaFacebookF onClick={() => window.open('https://www.facebook.com/bubu.azambuja/')} />
          </div>
        </PresentationCard>
      </Landing>

      <AboutMe />
      <Skills />
      <Reviews />
      <Portfolio />
      <Resume />

      <Footer>
        <div className="up"><FiArrowUp onClick={() => window.scrollTo(0, 0)} /></div>
        <div className="icons">
          <FaLinkedinIn onClick={() => window.open('https://br.linkedin.com/in/bruna-azambuja-756a971a5/')} /> 
          <FiMail onClick={() => window.open('mailto:brunazambuja@outlook.com')}/> 
          <FaGithub onClick={() => window.open('https://github.com/brunaazambuja')} /> 
          <FaFacebookF onClick={() => window.open('https://www.facebook.com/bubu.azambuja/')} />
        </div>
        <p>© Copyright 2021 <strong>Bruna Azambuja</strong>. All rights reserved. Developed with ReactJs.</p>
      </Footer>
    </Container>
  );
};

export default Dashboard;
