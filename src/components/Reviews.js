import React from "react";

import kathy from '../assets/kathy.jpeg';
import alan from '../assets/alan.jpeg';
import erick from '../assets/erick.jpeg';
import guga from '../assets/guga.jpeg';
import mario from '../assets/mario.jpeg';
import { ReviewsContainer } from './styles/Dashboard';

const Reviews = () => {
  return (
    <ReviewsContainer>
      <h1>Reviews</h1>
      <div className="reviews">
        <div className="profile">
          <img src={mario} alt="mario" />
          <p><strong>Mario Barba - Senior Software Engineer at Microsoft</strong> "Bruna is a smart 
          and capable engineer. She achieved all her tasks successfully even in 
            areas where she was not an expert on, she has excellent communication skills and is 
            customer focused. She has lots of enthusiasm and values that we look in a solid engineer. 
            Honesty, respect and integrity. For all those reasons I can confidently say that Bruna 
            would be an asset to any team and company, we would be lucky to have her."</p>
          <img src={alan} alt="alan" />
          <p><strong>Alan Cavalcante - Iteration Manager | VOBYS</strong> Bruna é excelente em tudo que pega para fazer, tive a 
          oportunidade de trabalhar como supervisor dela no VOBYS e tenho certeza que terá uma vida profissional brilhante.
          Espero que nossos caminhos se cruzem novamente.</p>
        </div>
        <div className="profile">
          <img src={kathy} alt="kathy" />
          <p><strong>Kathy Lee - Senior Cloud Solution Architect at Microsoft</strong> "Bruna and i worked 
          together on the Gloria Institute - relatus project. I was the technical lead from Microsoft and Bruna 
          was an intern software engineer. 1. Bruna is a fantastic engineer. She dove right into the project and 
          was a core contributor. I knew immediately that I could rely on Bruna. 2. Bruna is great to work with. 
          She asks good questions, is a great collaborator. I looked forward to every interaction I had with Bruna!
          I know Bruna is going to have a wonderful and rich career ahead of her and I will feel lucky if I get 
          to work with her again. Thanks for all of the amazing work you did, Bruna!"</p>
        </div>
        <div className="profile">
          <img src={guga} alt="guga" />
          <p><strong>Gustavo Guimarães - Board Member at Qubo - Data to Drive Innovation and CEO of Gloria's Institute</strong> "Bruna 
            has a strong sense of responsibility and works very well as a team. Actively participates in 
            project discussions and makes important contributions to the achievement of objectives, which is a decisive 
            characteristic in complex projects."</p>
          <img src={erick} alt="erick" />
          <p><strong>Erick Giffoni - Software Engineer</strong> "Bruna always contributes with great thoughts while 
          solving problems. She's very interested and dedicated to the project she works on, and when she has a 
          question she's not afraid to ask it!"</p>
        </div>
      </div>
    </ReviewsContainer>
  );
};

export default Reviews;
