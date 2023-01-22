import React from "react";

import { ResumeContainer } from './styles/Dashboard';

const Resume = ({ text }) => {
  return (
    <ResumeContainer>
      <div className="opacity">
        <h1>{text.titulo}</h1>
        <div className="line" />
        <div className="card left" style={{ top: "10rem" }}>
          <strong>{text.graduated_unb}</strong> GPA/IRA: 4,76 de 5 - UnB <p>(01/2018 - 09/2022)</p>
        </div>
        <div className="card right" style={{ top: "12rem" }}>
          <strong>{text.cambridge}</strong> "Pass with Distinction" level B2 - <p>Council of Europe.</p>
        </div>
        <div className="card left" style={{ top: "18rem" }}>
          <strong>{text.vobys}</strong> Vobys <p>(09/2019 - 10/2020)</p>
        </div>
        <div className="card right" style={{ top: "20rem" }}>
          <strong>{text.ynvisto_ari}</strong> Ynvisto Capital <p>(10/2020 - 01/2021)</p>
        </div>
        <div className="card left" style={{ top: "26rem" }}>
          <strong>{text.ynvisto_ari}</strong> Professor Ari <p>(02/2021 - 04/2021)</p>
        </div>
        <div className="card right" style={{ top: "28rem" }}>
          <strong>{text.pibic}</strong> {text.pibic_honor}: UnB <p>(07/2019 - 12/2021)</p>
        </div>
        <div className="card left" style={{ top: "34rem" }}>
          <strong>{text.gloria_micsft}</strong> Instituto Glória &#38; Microsoft <p>(10/2021 - 02/2022)</p>
        </div>
        <div className="card right" style={{ top: "36rem" }}>
          <strong>{text.tukey}</strong> Tukey Data <p>(08/2021 - 01/2023)</p>
        </div>
        <div className="card left" style={{ top: "42rem" }}>
          <strong>{text.li}</strong> Loja Integrada <p>(04/2022 - 01/2023)</p>
        </div>
        <div className="card right" style={{ top: "44rem" }}>
          <strong>{text.destaque}</strong>{text.unb}<p>(09/2022)</p>
        </div>
        <div className="card left" style={{ top: "50rem" }}>
          <strong>{text.hh}</strong> Hinge Health - SF California <p>(01/2023 - {text.atualmente})</p>
        </div>
      </div>
    </ResumeContainer>
  );
};

export default Resume;
