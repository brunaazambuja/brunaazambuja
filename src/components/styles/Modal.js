import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

import cssQuery from '../../utils/responsiveQueries';

export const StyledModal = styled(Modal)`
  .class {
    width: 55vw;
    max-width: none !important;
    @media (max-width: ${cssQuery('phone')}) { width: 100%; }
  }
  color: ${({ theme }) => theme.text};

  .color { background: ${({ theme }) => theme.light_color}; color: ${({ theme }) => theme.color}; }
  .modal-header, .modal-footer, .btn-primary { border: none;  }
  button { background: ${({ theme }) => theme.color}; &:hover { background: ${({ theme }) => theme.button.hover}; } }

  .body {
    @media (max-width: ${cssQuery('phone')}) { 
      min-width: 100%; 
      overflow-x: scroll;
      padding: 1rem;
      img { max-width: 80%; }
    }

    ul { text-align: left; }

    .btn-primary { border: none; }
    padding-left: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    img { max-height: 15rem; margin: 1rem 0 2rem 0; border-radius: 10px; box-shadow: -1rem 0 3rem rgb(0 0 0 / 20%); }

    background: ${({ theme }) => theme.light_color};
    strong, h3 { color: ${({ theme }) => theme.color}; }
  }
`;