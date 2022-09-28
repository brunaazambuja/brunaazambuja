import React from "react";
import Slider from '@mui/material/Slider';

import { SkillsContainer } from './styles/Dashboard';

const Skills = ({ text }) => {
  return (
    <SkillsContainer>
      <h1>Skills</h1>
      <div className="skills">
        <div className="tech">
          <strong>ReactJs / React Native</strong><Slider disabled defaultValue={90} className="slider" />
          <strong>NodeJs</strong><Slider disabled defaultValue={90} className="slider" />
          <strong>Python</strong><Slider disabled defaultValue={80} className="slider" />
          <strong>Machine Learning</strong><Slider disabled defaultValue={83} className="slider" />
          <div className="loading_title"><strong>Flutter<bold> - in progress</bold></strong><div className="loading-spinner"/></div><Slider disabled defaultValue={64} className="slider" />
        </div>
        <div className="professional">
          <strong>{text.dedication}</strong><Slider disabled defaultValue={90} className="slider" />
          <strong>{text.fast_learn}</strong><Slider disabled defaultValue={96} className="slider" />
          <strong>{text.organization}</strong><Slider disabled defaultValue={98} className="slider" />
          <strong>{text.communication}</strong><Slider disabled defaultValue={85} className="slider" />
        </div>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
