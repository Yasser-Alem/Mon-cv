import React from "react";
import { Experiences } from "./Experiences";
import { Frameworks } from "./Frameworks";
import { Hobbies } from "./Hobbies";
import { OtherSkills } from "./OtherSkills";
import "./styles.css";
export const Knowledges = () => {
  return (
    <div className="knowledges">
      <div className="knowledgesContent">
        <Frameworks />
        <Experiences />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};
