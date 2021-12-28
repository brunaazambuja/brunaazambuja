import React from "react";
import Slider from '@mui/material/Slider';

import { SkillsContainer } from './styles/Dashboard';

const Skills = () => {
  return (
    <SkillsContainer>
      <h1>Skills</h1>
      <div className="skills">
        <div className="tech">
          <strong>ReactJs e React Native</strong><Slider disabled defaultValue={95} className="slider" />
          <strong>NodeJs</strong><Slider disabled defaultValue={88} className="slider" />
          <strong>Python</strong><Slider disabled defaultValue={70} className="slider" />
          <strong>Machine Learning</strong><Slider disabled defaultValue={85} className="slider" />
        </div>
        <div className="professional">
          <strong>Dedicação</strong><Slider disabled defaultValue={90} className="slider" />
          <strong>Aprendizado Rápido</strong><Slider disabled defaultValue={96} className="slider" />
          <strong>Organização</strong><Slider disabled defaultValue={98} className="slider" />
          <strong>Comunicação</strong><Slider disabled defaultValue={80} className="slider" />
        </div>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
