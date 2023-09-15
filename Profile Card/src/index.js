import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "Bootstrap",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "React",
    level: "beginner",
    color: "purple",
  },
];

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
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        ></Skill>
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶🏻"}
        {level === "intermediate" && "👍🏻"}
        {level === "advanced" && "💪🏻"}
      </span>
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
