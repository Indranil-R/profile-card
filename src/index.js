import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const aboutMe = {
  name: "Indranil Roy",
  description:
    "Software Engineer and Junior Teamcenter Admin at HCL Technologies, specializing in Java and Next JS, eager to drive innovation and make a difference!",
};
const skills = [
  { name: "HTML+CSS", emoji: "💪", bgColour:"bg-blue-600" },
  { name: "Javascript", emoji: "🈵" , bgColour:"bg-yellow-300"},
  { name: "Strapi", emoji: "🐤", bgColour:"bg-purple-600" },
  { name: "Web design", emoji: "💪", bgColour:"bg-green-300" },
  { name: "React Js", emoji: "⚛" , bgColour:"bg-blue-400"},
  { name: "Next.JS", emoji: "⛔", bgColour:"bg-red-500" },
];

const App = () => {
  return (
    <div className="w-80 border-4 border-black m-10 font-mono ">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
};

const Avatar = () => {
  return <img src="https://placehold.co/400x200" alt="Avatar" />;
};
const Intro = () => {
  const about = aboutMe;
  return (
    <div className="p-4 space-y-2">
      <h1 className="text-2xl font-bold">{about.name}</h1>
      <p>{about.description}</p>
    </div>
  );
};
const SkillList = () => {
  const skillData = skills;
  return (
    <div className="flex flex-wrap px-4 pb-2 gap-2">
      {skillData.map((skillObj, index) => (
        <Skill skillObj={skillObj} />
      ))}
    </div>
  );
};

function Skill({ skillObj }) {
  return <div className={`${skillObj.bgColour} rounded-lg px-2`}>
    <p>{skillObj.name}&nbsp;{skillObj.emoji}</p>
  </div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
