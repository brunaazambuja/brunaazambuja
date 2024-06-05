import React from "react";

import kathy from '../assets/kathy.jpeg';
import alan from '../assets/alan.jpeg';
import erick from '../assets/erick.jpeg';
import guga from '../assets/guga.jpeg';
import yan from '../assets/yan.jpeg';
import mario from '../assets/mario.jpeg';
import jake from '../assets/jake.jpg';
import amanda from '../assets/amanda.jpg';
import regi from '../assets/regi.jpeg';
import { ReviewsContainer } from './styles/Dashboard';

const Reviews = () => {
  return (
    <ReviewsContainer>
      <div className="opacity">
        <h1>Reviews</h1>
        <div className="reviews">
        <div className="profile">
            <img src={mario} alt="mario" />
            <p><strong>Mario Barba - Senior Software Engineer at Microsoft</strong> "Bruna is a smart 
            and capable engineer. She achieved all her tasks successfully even in 
            areas where she was not an expert on, she has excellent communication skills and is 
            customer focused. </p><p>She has lots of enthusiasm and values that we look in a solid engineer. 
            Honesty, respect and integrity. For all those reasons I can confidently say that Bruna 
            would be an asset to any team and company, we would be lucky to have her."</p>
          </div>
          <div className="profile">
            <img src={yan} alt="yan" />
            <p><strong>Pedro Yan Ornelas - Senior Software Engineer</strong> "Bruna was, by far, one of the most memorable engineers I've had the pleasure to work with. We worked together on my FinTech Startup (Ynvisto) right before it got acquired, and she was pretty much spearheading FE Development at the time, despite still being in University, which is in itself a declaration of her talent and passion.</p><p>I've been in the position of a hiring manager before and frankly have seen engineers with three years on their backs delivering less quality work than she was doing back then, so don't let the "years of experience" fool you. I think she might impress you just like she did us way back then.</p><p>If you genuinely wish to see what she can do, and you assess that she is a culture-fit match, I suggest providing her with a technical challenge so she can showcase her engineering skills and let her code to the talking"</p>
          </div>
          <div className="profile">
            <img src={kathy} alt="kathy" />
            <p><strong>Kathy Lee - Senior Cloud Solution Architect at Microsoft</strong> "Bruna and i worked 
            together on the Gloria Institute - relatus project. I was the technical lead from Microsoft and Bruna 
            was an intern software engineer. 1. Bruna is a fantastic engineer. She dove right into the project and 
            was a core contributor. I knew immediately that I could rely on Bruna. 2. Bruna is great to work with. 
            She asks good questions, is a great collaborator. </p><p>I looked forward to every interaction I had with Bruna!
            I know Bruna is going to have a wonderful and rich career ahead of her and I will feel lucky if I get 
            to work with her again. Thanks for all of the amazing work you did, Bruna!"</p>
          </div>
          <div className="profile">
            <img src={amanda} alt="amanda" />
            <p><strong>Amanda Correa - Senior Engineer | Hinge Health</strong> "I would like to highlight one specific aspect 
            of Bruna's work that she excels in and should continue doing: her willingness to take on challenging tasks and promptly 
            resolve bugs, which significantly contributes to our team's success. She consistently volunteers to tackle the most 
            difficult tasks, demonstrating her unwavering dedication and determination. Her ability to handle complex assignments 
            effectively and efficiently has been instrumental in meeting our sprint goals and delivering high-quality software solutions. 
            Additionally, Bruna's quick bug-fixing skills ensure that potential roadblocks are swiftly addressed, allowing the team to 
            maintain productivity and momentum.</p><p>Bruna's exceptional communication skills greatly contribute to the team's overall success. 
            She is not only adept at articulating her own needs but also consistently extends her support to others. Her willingness to 
            assist her colleagues fosters a collaborative environment where everyone feels comfortable seeking and providing help. 
            Bruna's open and supportive communication style significantly enhances the team's cohesion, productivity, and overall 
            work experience.</p><p>On a personal note, I have had the pleasure of working closely with Bruna on various tasks, and I am 
            immensely grateful for her invaluable support. She has consistently demonstrated a strong commitment to finding solutions, 
            pushing through challenges until we arrive at successful outcomes. Bruna's determination and unwavering support have had 
            a profound impact on my own work, and I truly appreciate her dedication and problem-solving skills."</p>
          </div>
          <div className="profile">
            <img src={jake} alt="jake" />
            <p><strong>Jake Sutton - Senior Engineering Manager | Hinge Health</strong> "Bruna is absolutely fearless in her approach to work. 
            She will pick up any ticket from complex frontend animation to Basilisk, which is in an unfamiliar language. She will happily 
            contribute to any ongoing project. She is also willing to help the team out at any stage of the software development cycle. 
            She helps with PRs reviews and has become a strong acceptance tester for other engineers' tasks. This versatility is Bruna's 
            primary asset and is greatly appreciated by the whole team.</p><p>Whether she is a lead on a project or just helping get work done, 
            Bruna is always mindful and curious, which leads her to a deep understanding of the “why” for the work she does.</p><p>Bruna is one 
            of our top statistical performers in terms of PR created and merged. She will take on any task, regardless of what system 
            it concerns, and she is also one of our most frequent acceptance testers, helping move tickets to the done column."</p>
            <img src={guga} alt="guga" />
            <p><strong>Gustavo Guimarães - Board Member at Qubo - Data to Drive Innovation and CEO of Gloria's Institute</strong> "Bruna has a strong sense of responsibility and works very well as a team. Actively participates in 
              project discussions and makes important contributions to the achievement of objectives, which is a decisive 
              characteristic in complex projects."</p>
          </div>
          <div className="profile">
            <img src={alan} alt="alan" />
            <p><strong>Alan Cavalcante - Iteration Manager | VOBYS</strong> "Bruna é excelente em tudo que pega para fazer, tive a 
            oportunidade de trabalhar como supervisor dela no VOBYS e tenho certeza que terá uma vida profissional brilhante.
            Espero que nossos caminhos se cruzem novamente."</p>
            <img src={regi} alt="regi" />
            <p><strong>Regiane Dias - Quality Assurance Coordinator and Process</strong> "A Bruna realizou um excelente trabalho fazendo automações de backend. Além disto preparou uma documentação excelente que possibilitou a passagem de conhecimento por parte de seus hard skills.</p><p>Ela deve continuar sendo essa profissional incrível que se preocupa com o time e está sempre disposta a ajudar além de ter a mente questionadora o que ajuda muito a elevar o seu nível de confiança na tarefa que para si é incumbida."</p>
            <img src={erick} alt="erick" />
            <p><strong>Erick Giffoni - Software Engineer</strong> "Bruna always contributes with great thoughts while 
            solving problems. She's very interested and dedicated to the project she works on, and when she has a 
            question she's not afraid to ask it!"</p>
          </div>
         
        </div>
      </div>
    </ReviewsContainer>
  );
};

export default Reviews;
