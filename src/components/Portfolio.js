import React, { useState } from "react";

import shape from '../assets/about-shape-2.svg'
import cadeomw from '../assets/cadeomw.png'
import p4g from '../assets/p4g.png'
import relatus from '../assets/relatus.svg'
import brasilmaisia from '../assets/brasilmaisia.png'
import pibic from '../assets/pibic.png'
import harvard from '../assets/harvard.png'
import { PortfolioContainer } from "./styles/Dashboard";
import Modal from "./Modal";

const Portfolio = ({ text }) => {

  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  return (
    <PortfolioContainer>
      <img src={shape} alt="blob" className="blob" />
      <h1>{text.titulo}</h1>
      <div className="cards">
        <div onClick={() => {setModalShow(true); setModalContent({ title: 'Power for Girls - Empower to Lead', body: text.p4g_body });}} className="card">
          <img src={p4g} alt="p4g" />
          <h5>Power for Girls - Empower to Lead</h5>
        </div>

        <div onClick={() => {setModalShow(true); setModalContent({ title: text.relatus, body: text.relatus_body });}} className="card">
          <img src={relatus} alt="relatus" />
          <h5>{text.relatus}</h5>
        </div>

        <div onClick={() => {setModalShow(true); setModalContent({ title: 'Cadê o  MW?', body: text.cadeomw_body });}} className="card">
          <img src={cadeomw} alt="cadeomw" />
          <h5>Cadê o  MW?</h5>
        </div>

        <div onClick={() => {setModalShow(true); setModalContent({ title: text.pibic, body: text.pibic_body });}} className="card">
          <img src={pibic} alt="pibic" />
          <h5>{text.pibic}</h5>
        </div>

        <div onClick={() => {setModalShow(true); setModalContent({ title: 'Deep Learning Specialization + Introduction to AI - Harvard University', body: text.deeplearningai_body });}} className="card">
          <img src={harvard} alt="harvard" />
          <h5>Deep Learning Specialization + Introduction to AI - Harvard University</h5>
        </div>

        <div onClick={() => {setModalShow(true); setModalContent({ title: text.ceia, body: text.ceia_body });}} className="card">
          <img src={brasilmaisia} alt="brasilmaisia" />
          <h5>{text.ceia}</h5>
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
