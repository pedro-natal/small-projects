import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="avatar.png" alt="Pedro Ferreira Natal"></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>Pedro Ferreira Natal</h1>
      <p>
        Atualmente, trabalhando em projetos web, utilizando HTML, CSS,
        JavaScript, Bootstrap e React. Também possuo conhecimento em outras
        “stacks”. Busco uma oportunidade de ingressar e me desenvolver em uma
        empresa, aplicando meus conhecimentos técnicos e habilidades pessoais.
        Sempre colocando a frente o trabalho equipe e o crescimento pessoal e
        profissional.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="🖼️" color="orange"></Skill>
      <Skill skill="JavaScript" emoji="🌐" color="yellow"></Skill>
      <Skill skill="Bootstrap" emoji="💻" color="red"></Skill>
      <Skill skill="React" emoji="⚛️" color="purple"></Skill>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
