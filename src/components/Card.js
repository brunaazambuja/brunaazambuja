import React from 'react';
import styled, { css } from 'styled-components';

const FeatureCardContainer = styled.div`
  width: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 3px 20px 0px ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.text};
  margin: 2rem 0;
  padding: 2rem;

  ${({ background }) => background && css`background: ${background};`};

  .content-container {
    text-align: center;
    .text-container {
      h5 {
        font-weight: bold;
        margin: 5px;
        color: ${({ theme }) => theme.text};
      }
    }
  }

  transition: transform 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem ${({ theme }) => theme.text} !important;
  }
`;

const FeatureCard = ({
  title,
  text,
  children,
  logoColor = '',
  Logo = null,
  background = null,
}) => (
  <FeatureCardContainer background={background}>
    <div className="content-container">
      <div className="logo-container">
        {Logo && <Logo style={{ fontSize: 40, color: logoColor }} />}
      </div>
      <div className="text-container">
        <h5>{title}</h5>
        <p>{text}</p>
        {children}
      </div>
    </div>
  </FeatureCardContainer>
);

export default FeatureCard;
