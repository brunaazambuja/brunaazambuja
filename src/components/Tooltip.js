import React from 'react';
import { Container } from './styles/Tooltip';

const Tooltip = ({ title, className, children }) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;
