import { Button } from 'react-bootstrap';

import cadeomw from '../assets/cadeomw.png'
import grade from '../assets/grade.jpeg'
import p4g from '../assets/p4g.png'
import mcsft from '../assets/mcsft.png'
import gloria from '../assets/gloria.jpeg'
import prize_ceia from '../assets/prize_ceia.jpg'
import monitora from '../assets/python_monitora.jpg'
import pibic_helard from '../assets/pibic_helard.pdf'
import pibic_bruna from '../assets/pibic_bruna.pdf'
import deeplearning_certificate from '../assets/deeplearning_certificate.png'

export const cadeomw_body_en = (
    <><p><strong>Where is MW?</strong> is a project that aims to help the academic community of the University of 
    Brasília at enrollment times. With the migration of the enrollment sistem of Matrícula Web 
    (MW) for SIGAA, many students found themselves lost in an unintuitive environment.</p>
    <p>With that in mind, we, five Computer Engineering students, have developed a system where any information can 
    be found much more easily, including an automatic grid generator.</p>
    <Button onClick={() => window.open('https://cadeomw.com.br')}>Visit!</Button>
    <img src={cadeomw} alt="cadeomw" /><p> The project is entirely voluntary, with no link to the coordination of 
    the University. The activities were distribuited among the team according to the affinity of each one, and I was in charge of 
    doing the frontend of the platform.</p><p>The frameworks used were ReactJS for frontend and Django for backend.
    </p><img src={grade} alt="grade" /><p>During just the first week of the application online, we had over 25k unique users, 
    and over a million interactions with the platform. The team was invited to do an interview on a university podcast 
    O Canário, and a meeting with the UnB Coordinating Dean, after only 3 days of the platform on the air.</p></>
  );

export const p4g_body_en = (
  <><p><strong>Power for Girls</strong>  <strong>Gloria Institute</strong> in conjunction with the 
  <strong>US Embassy</strong> that brings together girls from all over Brazil with workshops 
  on female empowerment.</p><p>The focus of the program is the empowerment of girls through strategies aimed 
  at entrepreneurship, innovation, creativity and leadership - important skills for an increasingly globalized and 
  challenging world.</p><p>As a volunteer at Gloria Institute, I was in charge of developing the entire program's website. 
  Which contains the registration and editing form of the teams that will be part of the 2022 project. As well as 
  the administrator selection mechanism for the chosen teams.</p>
  <Button onClick={() => window.open('https://power4girls.com.br')}>Visit!</Button><img src={p4g} alt="p4g" />
  <p>The frameworks used were ReactJS for frontend and NodeJs for backend.</p><p>In previous versions of the program, 
  I had the opportunity to participate in person, as a Python monitor and listener of lectures, on subjects such as game 
  development, how to give a pitch and female empowerment.</p><img src={monitora} alt="monitora" 
  style={{ minHeight: "25rem" }}  /></>
);

export const relatus_body_en = (
  <><p><strong>RELATUS</strong> is an initiative of <strong>Gloria Institute</strong> in conjunction with
  <strong>Microsoft</strong> that aims to be a revolutionary project within its field and to help improve public policies.</p>
  <p>We, a volunteer team of engineers at the Gloria Institute, developed over a month and a half together with a team of 
  10 Microsoft Software engineers an Artificial Intelligence called Gloria that collects reports and narratives of domestic 
  violence suffered by women and girls.</p><p> In Brazil, every 1.4 seconds a woman is a victim of harassment. Every 7.2 seconds 
  a woman is a victim of physical violence.</p><p>This tool is being developed with the aim of trying to hear the story of 
  these women the way it is told, without their vocabulary being "contaminated" by the language of the listener. 
  With Glória, we can in the future trace a timeline of the reports and possibly even predict the behavior of violence.</p>
  <p>MIT Sloan Magazine posted an article explaining the project better, see below:</p>
  <Button onClick={() => window.open('https://mitsloanreview.com.br/post/projeto-relatus-tecnologia-e-dados-no-combate-a-violencia-de-genero')}>MIT Sloan Article</Button>
  <img src={mcsft} alt="mcsft" /><p>The tools used were ReactJs, Python, Azure Resources and Machine Learning techniques 
  since it was necessary to develop a processing using Artificial Intelligence that differentiates hate speech from real 
  reports of violence. This was necessary due to the fact that we don't want the narrative database to be contaminated by hateful words.</p>
  <p>In addition to the incredible experience of being able to work with a team of Microsoft engineers and learn agile development 
  techniques as they are implemented by them, in this time I evolved a lot as an engineer and got to know a network spread all over the world. 
  The meetings were entirely in English and were attended by people from the United States, England, Australia, Egypt, and several other countries.</p>
  <p></p><img src={gloria} alt="gloria" style={{ maxHeight: "20rem" }} /></>
);

export const ceia_body_en = (
  <><p>This course is a partnership between UnB and the Institute of Informatics (INF/UFG) and the Center of 
  Excellence in Artificial Intelligence (CEIA/UFG) of the Federal University of Goiás (UFG). A course with a 
  workload of 120 hours, it has 8 individual hands-on programming challenges and a final challenge in pairs. 
  The course has a gamified plan that ranks all participants according to their score in each challenge. 
  The top five winners receive a research grant in the CEIA (Center of Excellence in AI) technology initiation 
  project along with a tribute plaque. Achievements: I ranked 1⁰ in the general placement of the selection 
  process for the course, which had four tests of general knowledge of programming, calculus, linear algebra and English. 
  I was among the first five people in the final ranking and therefore guaranteed participation in CEIA's technological 
  initiation project.</p><p>I was ranked 1⁰ in the general placement of the selection process for the course, 
  which had four tests of general knowledge of programming, calculus, linear algebra and English. I was among the first 
  five people in the final ranking and therefore guaranteed participation in CEIA's technological initiation project.
  </p><Button onClick={() => window.open('https://brasilmaisia.com.br')}>Brasil mais IA</Button>
  <img src={prize_ceia} alt="prize_ceia" /></>
);

export const pibic_body_en = (
  <><p>This PIBIBC (Scientific Initiation Project) developed together with Professor Myléne Farias has as main objective 
  to analyze the performance of algorithms based on machine learning techniques such as autoencoder. During this study, 
  the behavior of features extracted from the autoencoder and possible patterns were also analyzed in different articles. 
  Both studies are presented in the articles below.</p>
  <p>One of the greatest personal achievements of this study was to receive an honorable mention award from CNPq after the development of the article.</p>
  <Button onClick={() => window.open(pibic_helard)}>Exploring the boundaries of an AE-based quality model</Button>
  <Button onClick={() => window.open(pibic_bruna)}>Analyzing and Exploring Patterns on Extracted Features used on a Quality Assessment Model</Button>
  </>
);

export const deeplearningai_body_en = (
  <><h3>Deep Learning AI</h3><p>This course helped me realize that neural networks are much more than I imagined and I 
  want to thank #deeplearningai for this amazing experience. Almost four months of hard work, taking advantage of the 
  quarantine and the benefits of the home office, focusing on this specialization.</p><p>After a lot of assignments, 
  I started to really see the importance of machine learning today and to recognize that it really is the future. 
  Much can be done with this power in your hands.</p><p>Assignments range from creating a painting from an image; create music 
  from a jazz database; identify a matching image of a person in a database of 10,000 people; identification of objects on the 
  street (for self-driving cars, for example, the algorithm identifies people, trees and other cars); identifying numbers 
  from a sign language image and much more.</p><p>
  A professor at the University of Brasília once quoted a very famous writer, and only after this specialization did I begin to understand him:
  </p><strong>“Any sufficiently advanced technology is indistinguishable from magic.” - Arthur Clarke</strong><p>
  Seeing an artificial intelligence creating things inherent to being human, like art and music, for me, is really magical.</p>
  <img src={deeplearning_certificate} alt="deeplearning_certificate" style={{ maxHeight: "20rem" }} />
  <p><h3>Introduction to AI - Harvard University</h3>This is a 7-week course that explores concepts and algorithms at the 
  foundation of modern artificial intelligence, delving into ideas that give rise to technologies such as game engines, 
  handwriting recognition, and machine translation. Through hands-on projects, students gain exposure to the theory behind 
  graph search algorithms, classification, optimization, reinforcement learning, and other topics in artificial intelligence and 
  machine learning as they incorporate them into their own. Python programs. At the end of the course, students emerge with experience 
  in machine learning libraries, as well as knowledge of artificial intelligence principles that allow them to design their own intelligent 
  systems. The subjects studied per week were: </p><ul><li>Searching algorithms;</li>
  <li>Representation of knowledge;</li><li>Uncertainty;</li><li>Optimization process algorithms;
  </li><li>Machine Learning, training and keeping experience - supervised, reinforcement and unsupervised;</li><li>
  Neural Networks - Deep learning, Convolutional, Linear (Perceptron), Recurrent, FeedForward;</li><li>Language.</li></ul>
  <Button onClick={() => window.open('https://github.com/brunaazambuja/Harvard_AI_with_Python')}>Projects developed in the course</Button></>
);