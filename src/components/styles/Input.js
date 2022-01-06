import styled, { css } from 'styled-components';

import cssQuery from '../../utils/responsiveQueries';
import Tooltip from '../Tooltip';


export const Container = styled.div`
  background: ${({ theme }) => theme.light_color};
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  display: flex;
  align-items: center;
  margin-bottom: 8px;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.text};
    width: 100%;
    padding-left: 16px;

    &::placeholder { color: ${({ theme }) => theme.placeholder_gray}; }
  }
  svg { min-width: 10%; }

  ${(props) => props.isErrored
    && css`
      border-color: #c53030;
      background: ${({ theme }) => theme.body};
    `}
  ${(props) => props.isFilled
    && css`
      color: ${({ theme }) => theme.color};
      border-color: ${({ theme }) => theme.color};
    `}
  ${(props) => props.isFocused
    && css`
      color: ${({ theme }) => theme.color};
      border-color: ${({ theme }) => theme.color};
    `}
  ${(props) => props.big
    && css`
      textarea {
        flex: 1;
        background: transparent;
        border: 0;
        color: ${({ theme }) => theme.text};
        width: 100%;
        padding-left: 16px;

        &::placeholder { color: ${({ theme }) => theme.placeholder_gray}; }
      }
    `}
  ${(props) => props.select
    && css`
      select {
        flex: 1;
        background: transparent;
        border: 0;
        color: ${({ theme }) => theme.text};
      }
    `}
  ${(props) => props.file
    && css`
      display: flex;
      flex-direction: row;
      position: relative;
    
      p { color: ${({ theme }) => theme.text}; }
    
      ${props.isFilled && css`
          background-color: ${({ theme }) => theme.body};
          border: 0;
        `}
    
      input {
        position: absolute;
        height: 100%;
        width: 300px;
        opacity: 0;
        z-index: 2;
        @media (max-width: ${cssQuery('phone')}) {
          width: 90%;
        }
      } 
      svg, p { margin: 0 5px; }
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg { margin: 0; }

  span {
    background: #c53030;
    color: #fff;
    &::before { border-color: #c53030 transparent; }
  }
`;