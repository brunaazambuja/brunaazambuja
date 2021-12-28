import { Button } from 'react-bootstrap';

import cadeomw from '../assets/cadeomw.png'
import grade from '../assets/grade.jpeg'
import p4g from '../assets/p4g.png'
import mcsft from '../assets/mcsft.png'
import gloria from '../assets/gloria.jpeg'
import prize_ceia from '../assets/prize_ceia.jpg'
import deeplearning_certificate from '../assets/deeplearning_certificate.png'

export const cadeomw_body = (
    <><p>O <strong>Cadê o MW?</strong> é um projeto que visa ajudar a comunidade acadêmica da Universidade 
    de Brasília em tempos de matrícula. Com a migração do sistema de
    matrícula do Matrícula Web (MW) para o SIGAA, muitos alunos se viram perdidos
    num ambiente pouco intuitivo.</p><p>Pensando nisso, nós, cinco alunos de Engenharia de Computação, 
    desenvolvemos um sistema onde qualquer informação pode ser buscada com muito
    mais facilidade, incluindo ainda um gerador de grade automático.</p>
    <Button onClick={() => window.open('https://cadeomw.com.br')}>Visitar!</Button>
    <img src={cadeomw} alt="cadeomw" /><p> O projeto é inteiramente voluntário, sem vínculo com coordenação da UnB.
    As atividades foram distribuídas entre o time de acordo com a afinidade de cada
    um, e eu fui encarregada de fazer o frontend da plataforma.</p><p>
    Os frameworks utilizados foram ReactJS para frontend e Django para
    backend.</p><img src={grade} alt="grade" /><p>Durante apenas a primeira semana da aplicação no ar, tivemos mais de 25
    mil usuários únicos, e mais de um milhão de interações com a plataforma.
    O time foi chamado para fazer uma entrevista num podcast universitário O
    Canário, e uma reunião com o próprio Decanato de Coordenação da UnB, após apenas
    3 dias da plataforma no ar.</p></>
  );

export const p4g_body = (
  <><p><strong>Power for Girls</strong> é uma iniciativa do <strong>Instituto Glória</strong> juntamente com 
  a <strong>Embaixada dos Estados Unidos</strong> que junta meninas do Brasil inteiro com oficinas e workshops
  sobre empoderamento feminino.</p><p>O foco do programa é o empoderamento de meninas por meio de estratégias 
  voltadas para o empreendedorismo, inovação, criatividade e liderança - importantes competências para um 
  mundo cada vez mais globalizado e desafiador.</p><p>Como voluntária do Instituto Glória, eu 
  fui encarregada de desenvolver inteiramente o website do programa. Que contém formulário de inscrição e edição das 
  equipes que farão parte do projeto de 2022. Assim como o mecanismo de seleção do administrador às equipes escolhidas.</p>
  <Button onClick={() => window.open('https://power4girls.com.br')}>Visitar!</Button><img src={p4g} alt="p4g" />
  <p>Os frameworks utilizados foram ReactJS para frontend e NodeJs para backend.</p></>
);

export const relatus_body = (
  <><p><strong>RELATUS</strong> é uma iniciativa do <strong>Instituto Glória</strong> juntamente com 
  a <strong>Microsoft</strong> que visa ser um projeto revolucionário dentro de sua área e ajudar a melhorar políticas públicas.</p>
  <p>Nós, time voluntário de engenheiros do Instituto Glória, desenvolvemos ao longo de um mês e meio em conjunto com um time de 10 
  engenheiros de Software da Microsoft uma Inteligência Artificial chamada Glória que coleta relatos e narrativas de violência doméstica 
  sofrida por mulheres e meninas.</p><p>No Brasil, a cada 1.4 segundo uma mulher é vítima de assédio. A cada 7.2 segundos uma mulher é vítima 
  de violência física.</p><p>Essa ferramenta está sendo desenvolvida com o intuito de tentar ouvir a história dessas mulheres do jeito que é contada,
  sem que seu vocabulário seja "contaminado" pelo linguajar daquele que a escuta. Com a Glória, podemos futuramente tracejar uma linha do tempo dos 
  relatos e possivelmente até prever o comportamento de violência.</p><p>A Revista MIT Sloan postou um artigo explicando melhor sobre o projeto, veja a seguir:</p>
  <Button onClick={() => window.open('https://mitsloanreview.com.br/post/projeto-relatus-tecnologia-e-dados-no-combate-a-violencia-de-genero')}>Artigo MIT Sloan</Button>
  <img src={mcsft} alt="mcsft" /><p>As ferramentas utilizadas foram ReactJs, Python, Azure Resources e técnicas de Machine Learning visto 
  que foi preciso desenvolver um processamento utilizando Inteligência Artificial que diferencia discursos de ódio dos relatos reais de violência.
  Isso foi necessário devido ao fato de que não queremos que a base de dados das narrativas seja contaminada por palavras de ódio.</p>
  <p>Além da experiência incrível de poder trabalhar com um time de engenheiros da Microsoft e aprender técnicas de desenvolvimento ágil
  da forma que são implementadas por eles, neste tempo eu evoluí muito como engenheria e conheci uma rede de network expalhada pelo mundo inteiro. 
  As reuniões eram inteiramente em inglês e contavam com a presença de pessoas dos Estados Unidos, Inglaterra, Austrália, Egito, e vários outros países.</p>
  <p></p><img src={gloria} alt="gloria" style={{ maxHeight: "20rem" }} /></>
);

export const ceia_body = (
  <><p>Este curso é uma parceria entre a UnB e o Instituto de Informática (INF/
  UFG) e o Centro de Excelência em Inteligência Artificial (CEIA/UFG) da
  Universidade Federal de Goiás (UFG). Um curso de carga horária de 120 horas,
  conta com 8 desafios individuais de programação hands on e um desafio final em
  dupla. O curso conta com um plano gamificado que rankeia todos os participantes
  de acordo com sua pontuação em cada desafio. Os cinco primeiros colocados ganham
  uma bolsa de pesquisa no projeto de iniciação tecnológica do CEIA (Centro de
  Excelência em IA) juntamente com uma placa de homenagem.
  Conquistas: Fiquei em 1⁰ na colocação geral do processo de seleção para o
  curso, que contava com quatro provas de conhecimentos gerais de programação,
  cálculo, álgebra linear e inglês. Fiquei entre as cinco primeiras pessoas no
  rankeamento final e portanto garanti participação no projeto de iniciação
  tecnológica do CEIA.</p><p>Fiquei em 1⁰ na colocação geral do processo de seleção para o
  curso, que contava com quatro provas de conhecimentos gerais de programação,
  cálculo, álgebra linear e inglês. Fiquei entre as cinco primeiras pessoas no
  rankeamento final e portanto garanti participação no projeto de iniciação
  tecnológica do CEIA.</p><Button onClick={() => window.open('https://brasilmaisia.com.br')}>Brasil mais IA</Button>
  <img src={prize_ceia} alt="prize_ceia" /></>
);

export const harvard_body = (
  <><p>Este é um curso de 7 semanas que explora conceitos e algoritmos na fundação de inteligência artificial
  moderna, mergulhando em ideias que dão origem a tecnologias como mecanismos
  de jogo, reconhecimento de manuscritos, e tradução automática. Através de projetos práticos, 
  estudantes ganham exposição à teoria por trás de algoritmos de busca em grafos, classificação, 
  otimização, aprendizado por reforço (reinforcement learning), e outros tópicos em inteligência artificial
  e aprendizado de máquina, à medida que os incorporam aos seus próprios
  programas em Python. Ao final do curso, os alunos emergem com experiência em
  bibliotecas de aprendizado de máquina, bem como conhecimento dos princípios
  de inteligência artificial que lhes permitem projetar seus próprios sistemas
  inteligentes. Os assuntos estudados por semana foram: </p><ul><li>Searching algorithms;</li>
  <li>Representation of knowledge;</li><li>Uncertainty;</li><li>Optimization process algorithms;
  </li><li>Machine Learning, training and keeping experience - supervised, reinforcement and unsupervised;</li><li>
  Neural Networks - Deep learning, Convolutional, Linear (Perceptron), Recurrent, FeedForward;</li><li>Language.</li></ul>
  <Button onClick={() => window.open('https://github.com/brunaazambuja/Harvard_AI_with_Python')}>Projetos desenvolvidos no curso</Button></>
);

export const deeplearningai_body = (
  <><p>Este curso me ajudou a perceber que as redes neurais são muito mais do que eu imaginava e quero agradecer a #deeplearningai por 
  essa experiência incrível. Quase quatro meses de muito trabalho, aproveitando a quarentena e os benefícios do home office, com foco 
  nesta especialização.</p><p>Depois de muitas atribuições, comecei a ver realmente a importância do aprendizado de máquina hoje em dia
  e a reconhecer que realmente é o futuro. Muito pode ser feito com este poder em suas mãos.</p><p>As atribuições variam entre criar 
  uma pintura a partir de uma imagem; criar música a partir de um banco de dados de jazz; identificar uma imagem correspondente de uma 
  pessoa em um banco de dados de 10 mil pessoas; identificação de objetos na rua (para carros que se dirigem sozinho, por exemplo, o algoritmo 
  identifica pessoas, árvores e outros carros); identificando números a partir de uma imagem de linguagem de sinais e muito mais.</p><p>
  Certa vez, um professor da Universidade de Brasília citou um escritor muito famoso, e só depois dessa especialização comecei a entendê-lo:
  </p><strong>“Qualquer tecnologia suficientemente avançada é indistinguível da magia.” - Arthur Clarke</strong><p>
  Ver uma inteligência artificial criando coisas inerentes ao ser humano, como arte e música, para mim, é realmente mágico.</p>
  <img src={deeplearning_certificate} alt="deeplearning_certificate" style={{ maxHeight: "20rem" }} /></>
);