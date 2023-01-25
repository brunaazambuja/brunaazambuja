import React from "react";
import { FiMail, FiArrowUp } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

import back from '../assets/vista.jpg';
import landingMe from '../assets/me.jpg';
import logo from '../assets/logo/logo_horizontal.svg';
import { Container, PresentationCard, Landing, Footer, TranslateButton } from './styles/Dashboard';
import Reviews from "./Reviews";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import eua from '../assets/eua.jpeg';
import br from '../assets/br.jpeg';
import { Link } from "react-router-dom";

// import ContactMe from "./ContactMe";

const Dashboard = ({ text, translate = 'pt' }) => {
  return (
    <Container>
      <Landing>
        <img src={back} alt="back" className="back" />
        <TranslateButton>
          {translate === 'en' ? 
          (<Link to="/"><img src={br} alt="br" className="br" />Traduzir</Link>) : 
          (<Link to="/english"><img src={eua} alt="eua" className="eua" />Translate</Link>)}
        </TranslateButton>
        <PresentationCard>
          <img src={landingMe} alt="me" className="me" />
          <img src={logo} alt="logo" className="logo" />
          {text.titulo}
          <div className="icons" >
            <FaLinkedinIn onClick={() => window.open('https://br.linkedin.com/in/bruna-azambuja-756a971a5/')} /> 
            <FiMail onClick={() => window.open('mailto:brunazambuja@outlook.com')}/> 
            <FaGithub onClick={() => window.open('https://github.com/brunaazambuja')} /> 
            <FaFacebookF onClick={() => window.open('https://www.facebook.com/bubu.azambuja/')} />
          </div>
        </PresentationCard>
      </Landing>

      <AboutMe text={text.aboutMe} />
      <Skills text={text.skills} />
      <Reviews />
      <Portfolio text={text.portfolio} />
      <Resume text={text.resume}  />
      {/* <ContactMe /> */}

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
