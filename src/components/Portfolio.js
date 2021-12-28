import React, { useState } from "react";

import shape from '../assets/about-shape-2.svg'
import cadeomw from '../assets/cadeomw.png'
import p4g from '../assets/p4g.png'
import relatus from '../assets/relatus.svg'
import brasilmaisia from '../assets/brasilmaisia.png'
import deeplearningai from '../assets/deeplearningai.png'
import harvard from '../assets/harvard.png'
import { PortfolioContainer } from "./styles/Dashboard";
import Modal from "./Modal";
import { cadeomw_body, ceia_body, deeplearningai_body, harvard_body, p4g_body, relatus_body } from "../utils/constants";

const Portfolio = () => {

  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  return (
    <PortfolioContainer>
      <img src={shape} alt="blob" className="blob" />
      <h1>Portfólio</h1>
      <div className="cards">
        <div onClick={() => {setModalShow(true); setModalContent({ title: 'Power for Girls - Empower to Lead', body: p4g_body });}} className="card">
          <img src={p4g} alt="p4g" />
          <h5>Power for Girls - Empower to Lead</h5>
        </div>

        <div onClick={() => {setModalShow(true); setModalContent({ title: 'RELATUS - parceiria com Microsoft', body: relatus_body });}} className="card">
          <img src={relatus} alt="relatus" />
          <h5>RELATUS - parceiria com Microsoft</h5>
        </div>

        <div onClick={() => {setModalShow(true); setModalContent({ title: 'Cadê o  MW?', body: cadeomw_body });}} className="card">
          <img src={cadeomw} alt="cadeomw" />
          <h5>Cadê o  MW?</h5>
        </div>

        <div onClick={() => {setModalShow(true); setModalContent({ title: 'Introduction to AI - Harvard University', body: harvard_body });}} className="card">
          <img src={harvard} alt="harvard" />
          <h5>Introduction to AI - Harvard University</h5>
        </div>

        <div onClick={() => {setModalShow(true); setModalContent({ title: 'Deep Learning Specialization', body: deeplearningai_body });}} className="card">
          <img src={deeplearningai} alt="deeplearningai" />
          <h5>Deep Learning Specialization</h5>
        </div>

        <div onClick={() => {setModalShow(true); setModalContent({ title: 'Centro de Excelência em Inteligência Artificial', body: ceia_body });}} className="card">
          <img src={brasilmaisia} alt="brasilmaisia" />
          <h5>Centro de Excelência em Inteligência Artificial</h5>
        </div>

      </div>

      <Modal
        show={modalShow}
        content={modalContent}
        onHide={() => setModalShow(false)}
        style={{ width: '100%' }}
      />
    </PortfolioContainer>
  );
};

export default Portfolio;