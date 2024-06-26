import styled from "styled-components";

import cssQuery from '../../utils/responsiveQueries';
import tile from '../../assets/logo/tile.png';

export const Container = styled.div`
  color: ${({ theme }) => theme.text};
  text-align: center;

  h1 { 
    font-size: 3rem;
    &::after {
      content: '';
      height: 3px;
      width: 200px;
      background-color: ${({ theme }) => theme.color};
      display: block;
      margin: 10px 0;
      margin: 10px auto;
    }
  }
  p { margin-bottom: 20px; font-weight: lighter; }
`

export const TranslateButton = styled.button`
  position: absolute;
  top: 5rem;
  left: 5rem;
  text-transform: none;
  border: 0;
  text-decoration: none;
  background: transparent;

  @media (max-width: ${cssQuery('phone')}) { top: 10px; left: 10px; } 
  
  div {
    padding: 5px;
    text-transform: none;
    border: 0;
    text-decoration: none;
    
    color: ${({ theme }) => theme.text};
    background: transparent;
  }

  img {
    height: 30px;
    margin-right: 5px;
  }
`

export const PresentationCard = styled.div`
  width: 28rem;
  height: 50%;

  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translate(-50%);

  background: ${({ theme }) => theme.light_color};
  border-radius: 15px;
  box-shadow: -1rem 0 3rem rgb(0 0 0 / 20%);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 30px;

  .logo {
    margin-bottom: 1rem;
    @media (max-width: ${cssQuery('phone')}) { width: 90%; } 

  }
  .me {   
    border-radius: 50%;
    height: 20rem;
    width: 20rem;
    border: 10px solid ${({ theme }) => theme.color};
    margin-top: -50%;
    @media (max-width: ${cssQuery('phone')}) { height: 15rem; width: 15rem; margin-top: -40%; } 

    transform: scale(1);
    animation: pulse 2s infinite;

    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 185, 188, 0.7);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 3rem rgba(0, 185, 188, 0);
      }
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 185, 188, 0);
      }
    }
  }

  .icons {
    display: flex;
    gap: 2rem;
    margin-top: .5rem;

    svg {
      border-radius: 50%;
      border: 1px solid white;
      height: 2.5rem;
      width: 2.5rem;
      padding: 10px 0;
      
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color};
        transition: all 0.5s ease 0s;
        border: 1px solid ${({ theme }) => theme.color};
      }
    }
  }
`

export const Landing = styled.section`
  height: 85vh;
  .back { opacity: 0.3; width: 100%; height: 85vh; }
  position: relative;
`

export const AboutMeContainer = styled.section`
  padding: 2rem 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  position: relative;
  strong { color: ${({ theme }) => theme.color}; }
  img { 
    position: absolute;
    right: 0;
    bottom: -15rem;
    z-index: -1;
  }

  .details {
    display: flex;
    width: 100%;
    justify-content: space-between;
    h5 { margin-bottom: 2rem; }

    @media (max-width: ${cssQuery('tablet')}) { flex-direction: column; } 

    .contact {
      margin-bottom: 3rem;
      div { 
        display: flex; 
        justify-content: space-between; 
        gap: 3rem;  
        span { 
          background: ${({ theme }) => theme.color}; 
          border-radius: 5px; 
          padding: 0 10px;
        }
        @media (max-width: ${cssQuery('phone')}) { flex-direction: column; gap: 0; } 
      }
    }
    .interests {
      svg { font-size: 2rem; margin-bottom: 10px; }
      width: 45%;
    
      .line {  
        display: flex;  
        margin-bottom: 2rem;
        gap: 2rem;
        @media (max-width: ${cssQuery('tablet')}) { 
          display: grid;
          grid-template-columns: 6rem 1rem;
        } 

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        
          background-color: ${({ theme }) => theme.light_color};
          border-radius: 10px;
          min-width: 6rem;
          min-height: 6rem;
          box-shadow: -1rem 0 3rem rgb(0 0 0 / 20%);
          font-size: 14px;

          &:hover {
            cursor: pointer;
            background-color: ${({ theme }) => theme.color};
            transition: all 1s ease 0s;
          }
        }
      }
    }
  }    
`

export const SkillsContainer = styled.section`
  padding: 2rem 20%;
  background-color: ${({ theme }) => theme.light_color};

  .skills {
    display: flex;
    justify-content: space-around;
    @media (max-width: ${cssQuery('phone')}) { flex-direction: column; } 

    .tech, .professional {
      text-align: left;
      width: 30%;
      @media (max-width: ${cssQuery('phone')}) { width: 80%; } 
      bold { color: ${({ theme }) => theme.placeholder_gray}; }

      .slider { color: ${({ theme }) => theme.color}; }

      .loading_title {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .loading-spinner {
          width: 10px;
          height: 10px;
          margin-left: 15px;
          border: 10px solid #f3f3f3; /* Light grey */
          border-top: 10px solid #383636; /* Black */
          border-radius: 50%;
          animation: spinner 1.5s linear infinite;
        }
      }
    }
  }
`

export const ReviewsContainer = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.body};
  background-image: url(${tile});
  .opacity { background: rgba(20, 24, 26, 0.85); height: 100%; width: 100%; padding: 2rem 10vw; }

  @media (max-width: ${cssQuery('phone')}) { .opacity { padding: 2rem; } } 

  .reviews {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 30% 30% 30%;
    @media (max-width: ${cssQuery('tablet')}) { grid-template-columns: 100%;} 

    margin-top: 3rem;
    p { font-size: 14px; }

    .profile {
      align-items: center;
      background-color: ${({ theme }) => theme.body};
      box-shadow: -1rem 0 3rem rgb(0 0 0 / 20%);
      padding: 1rem 2rem;
      border-radius: 20px;
      margin-bottom: 2rem;

      strong { color: ${({ theme }) => theme.color}; }
      img { 
        height: 7rem;
        width: 7rem;
        border-radius: 50%;
        margin-bottom: 1rem;
      }
      &:hover {
        transform: translateY(-10px);
        transition: all 0.5s ease 0s;
      }
    }
  }
`

export const PortfolioContainer = styled.div`
  padding: 2rem 15vw;
  position: relative;
  background-color: ${({ theme }) => theme.light_color};

  @media (max-width: ${cssQuery('tablet')}) { padding: 2rem; } 

  .blob { 
    position: absolute;
    left: 0;
  }

  .cards {
    margin: 5rem auto;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 33% 33% 33%;
    @media (max-width: ${cssQuery('tablet')}) { grid-template-columns: 50% 50%;} 
    @media (max-width: ${cssQuery('phone')}) { grid-template-columns: 100%;} 

    .card {
      margin: 2rem auto;
      border-radius: 20px;
      box-shadow: -1rem 0 3rem rgb(0 0 0 / 20%);
      cursor: pointer;
      h5 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }

      img {
        height: 15rem;
        width: 20vw;
        border-radius: 20px;
        @media (max-width: ${cssQuery('tablet')}) { width: 40vw; } 
        @media (max-width: ${cssQuery('phone')}) { width: 80vw; } 
      }
      &:hover {
        background-color: ${({ theme }) => theme.color};
        transition: all 0.3s ease 0s;
        img { opacity: 0.1; transition: all 0.3s ease 0s; }
        h5 { opacity: 1; }
      }

    }
  }
`

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.body};
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  strong { color: ${({ theme }) => theme.color}; }

  .up {
    z-index: 1;
    margin-top: -10px;
    border-radius: 50%;
    min-height: 3.5rem;
    width: 3.5rem;

    padding: 5px 0;
    background-color: ${({ theme }) => theme.color};
    
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover { cursor: pointer; }
    svg { font-size: 25px; }
  }

  .icons {
    display: flex;
    gap: 2rem;
    margin-top: 2.5rem;
    margin-bottom: .5rem;

    svg {
      border-radius: 50%;
      border: 1px solid white;
      height: 2.5rem;
      width: 2.5rem;
      padding: 10px 0;
      
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color};
        transition: all 0.5s ease 0s;
        border: 1px solid ${({ theme }) => theme.color};
      }
    }
  }
`

export const ResumeContainer = styled.section`
  background-color: ${({ theme }) => theme.body};
  background-image: url(${tile});
  .opacity { min-height: 65rem; background: rgba(20, 24, 26, 0.85); height: 100%; width: 100%; padding: 2rem 20% 5rem 20%; }

  position: relative;
  min-height: 65rem;
  strong { color: ${({ theme }) => theme.color}; }

  .line { 
    height: 45rem;
    width: 3px;
    background: ${({ theme }) => theme.color};
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
   }

   .card {
    background-color: ${({ theme }) => theme.light_color};
    border-radius: 20px;
    box-shadow: -1rem 0 3rem rgb(0 0 0 / 20%);
    height: 7rem;  
    padding: 1rem;
    position: absolute;
    p { color: ${({ theme }) => theme.color}; }
    &:hover { 
      background-color: #005d5e; 
      transition: all 0.5s ease 0s;
    }
    @media (max-width: ${cssQuery('phone')}) { 
      font-size: 15px; 
      padding: 10px 5px; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      p { margin: 0; }
    } 
  }
  .left { right: 52%; }
  .right { left: 52%; }
`

export const ContactMeContainer = styled.section`
  background-color: ${({ theme }) => theme.light_color};
  background-image: url(${tile});
  position: relative;

  .opacity { background: rgba(20, 24, 26, 0.85); height: 100%; width: 100%; padding: 2rem 20% 5rem 20%; }
  .form { width: 50%; margin: auto; }
  h1 { margin-bottom: 3rem; }
  button { 
    background-color: ${({ theme }) => theme.color};  
    color: ${({ theme }) => theme.text};  
    border-radius: 15px;
    padding: 10px 5rem;
  }
  @media (max-width: ${cssQuery('tablet')}) {
    .form { width: 90%; margin: auto; }
    .opacity { padding: 2rem 2rem 5rem 2rem; }
  }

`