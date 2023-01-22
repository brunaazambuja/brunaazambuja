import React from "react";
import { FiMusic, FiEye } from 'react-icons/fi';
import { FaVolleyballBall, FaHandshake } from 'react-icons/fa';
import { IoIosFootball, IoIosAirplane } from 'react-icons/io';
import { GiBrain } from 'react-icons/gi';

import shape from '../assets/about-shape-1.svg'
import { AboutMeContainer } from './styles/Dashboard';

const AboutMe = ({ text }) => {
  return (
    <AboutMeContainer>
      <img src={shape} alt="blob" />
      <h1>{text.title}</h1>
      <p><strong>{text.first_text_strong}</strong>{text.first_text}</p>
      <p>{text.second_text}</p>
      <div className="details">
        <div className="contact">
          <h5>{text.info_pessoais.titulo}</h5>
          <div><strong>{text.info_pessoais.graduação_strong}</strong><p>{text.info_pessoais.graduação}</p></div>
          <div><strong>{text.info_pessoais.nascimento_strong}</strong><p>{text.info_pessoais.nascimento}</p></div>
          <div><strong>{text.info_pessoais.email_strong}</strong><p>{text.info_pessoais.email}</p></div>
          <div><strong>{text.info_pessoais.nacionalidade_strong}</strong><p>{text.info_pessoais.nacionalidade}</p></div>
          <div><strong>{text.info_pessoais.status_strong}</strong><span>{text.info_pessoais.status}</span></div>
          <div><p/><p> - SF California</p></div>
        </div>
        <div className="interests">
          <h5>{text.interesses.titulo}</h5>
          <div className="line">
            <div><FaVolleyballBall />{text.interesses.volei}</div>
            <div><IoIosFootball />{text.interesses.futevolei}</div>
            <div><IoIosAirplane />{text.interesses.viajar}</div>
            <div><FiMusic />{text.interesses.musica}</div>
          </div>
          <div className="line">
            <div><GiBrain />{text.interesses.ia}</div>
            <div><FiEye />{text.interesses.vc}</div>
            <div><FaHandshake />{text.interesses.social}</div>
          </div>
        </div>
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
