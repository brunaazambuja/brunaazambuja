import React from "react";
import { FiMusic, FiEye } from 'react-icons/fi';
import { FaVolleyballBall, FaHandshake } from 'react-icons/fa';
import { IoIosFootball, IoIosAirplane } from 'react-icons/io';
import { GiBrain } from 'react-icons/gi';

import shape from '../assets/about-shape-1.svg'
import { AboutMeContainer } from './styles/Dashboard';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <img src={shape} alt="blob" />
      <h1>Sobre mim</h1>
      <p>
        <strong>Olá! Eu sou Bruna Azambuja</strong> e por meio desta página você vai poder conhecer um pouquinho mais sobre mim. 
        Sou brasileira, nascida e criada em Brasília. Tenho 21 anos no momento (2021) e estou no 8⁰ semestre de Engenharia 
        de Computação na Universidade de Brasília - UnB. Possuo um elevado senso de organização e motivação para aprender, 
        assim como um alto grau de comprometimento e responsabilidade. 
      </p>
      <p>
        Sou apaixonada por jogar volêi e estou me aventurando no Futvôlei. Sou entusiasta de Inteligência Artificial e 
        Visão Computacional, e pretendo, por meio da computação, defender e incentivar mulheres e meninas nesta área.
      </p>
      <div className="details">
        <div className="contact">
          <h5>Informações Pessoais</h5>
          <div><strong>Graduação</strong><p>Engenharia da Computação - UnB</p></div>
          <div><strong>Data de Nascimento</strong><p>01/07/2000</p></div>
          <div><strong>Telefone para contato</strong><p>(61) 99271-6277</p></div>
          <div><strong>E-mail</strong><p>brunazambuja@outlook.com</p></div>
          <div><strong>Nacionalidade</strong><p>Brasileira - Brasília/DF</p></div>
          <div><strong>Status</strong><span>Desenvolvedora da Tukey Data</span></div>
        </div>
        <div className="interests">
          <h5>Meus Interesses</h5>
          <div className="line">
            <div><FaVolleyballBall />VÔLEI</div>
            <div><IoIosFootball />FUTVÔLEI</div>
            <div><IoIosAirplane />VIAJAR</div>
            <div><FiMusic />MÚSICA</div>
          </div>
          <div className="line">
            <div><GiBrain />INTELIGÊNCIA ARTIFICIAL</div>
            <div><FiEye />VISÃO COMPUTACIONAL</div>
            <div><FaHandshake />CONSCIÊNCIA SOCIAL</div>
          </div>
        </div>
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
