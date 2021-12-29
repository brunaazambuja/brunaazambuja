import React from "react";

import { ResumeContainer } from './styles/Dashboard';

const Resume = () => {
  return (
    <ResumeContainer>
      <h1>Experiências</h1>
      <div className="line" />
      <div className="card left" style={{ top: "10rem" }}>
        <strong>Diploma de Cambridge:</strong> "Pass with Distinction" nível B2 - <p>Council of Europe.</p>
      </div>
      <div className="card right" style={{ top: "12rem" }}>
        <strong>Engenharia de Computação - UnB</strong> GPA/IRA: 4,73 de 5 <p>(1/2018 - atualmente)</p>
      </div>
      <div className="card left" style={{ top: "18rem" }}>
        <strong>Estagiária Java Júnior</strong> - Vobys <p>(09/2019 - 10/2020)</p>
      </div>
      <div className="card right" style={{ top: "20rem" }}>
        <strong>Freelancer React Js</strong> - Ynvisto Capital <p>(10/2020 - 01/2021)</p>
      </div>
      <div className="card left" style={{ top: "26rem" }}>
        <strong>Freelancer React Js</strong> - Professor Ari <p>(02/2021 - 04/2021)</p>
      </div>
      <div className="card right" style={{ top: "28rem" }}>
        <strong>Monitora de Python</strong> - Voluntária do Instituto Glória <p>(02/2021)</p>
      </div>
      <div className="card left" style={{ top: "34rem" }}>
        <strong>Desenvolvedora Fullstack</strong> - Tukey Data <p>(08/2021 - atualmente)</p>
      </div>
      <div className="card right" style={{ top: "36rem" }}>
        <strong>Egenheira de Software</strong> - Instituto Glória e Microsoft <p>(10/2021 - atualmente)</p>
      </div>


      
    </ResumeContainer>
  );
};

export default Resume;
