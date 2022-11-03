import React from "react";
import { api } from "utils/api";
import "./styles.css";
export const OtherSkills = () => {
  const skills = api.skills.getAll();
  return (
    <div className="other-skills">
      <h3>Autres Compétences</h3>
      <div className="list">
        <ul>
          {skills
            .filter(
              (tools) =>
                tools.type === "dev_tools" || tools.type === "graphic_tools"
            )
            .map(({ id, icon, skill }) => (
              <li key={id}>
                <i className={icon}></i>
                {skill}
              </li>
            ))}
        </ul>
        {skills
          .filter((language) => language.type === "lang")
          .map(({ id, icon, skill }) => (
            <li key={id}>
              <i className={icon}></i>
              {skill}
            </li>
          ))}
      </div>
    </div>
  );
};
