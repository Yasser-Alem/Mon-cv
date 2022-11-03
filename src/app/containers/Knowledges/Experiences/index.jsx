import React from "react";
import { api } from "utils/api";
import "./styles.css";
export const Experiences = () => {
  const competencesExp = api.competencesExp.getAll();
  return (
    <div className="experiences">
      <h3>Experiences</h3>
      {competencesExp.map(({ id, className, job, years, descriptif }) => (
        <div className={className} key={id}>
          <h4>{job}</h4>
          <h5>{years}</h5>
          <p>{descriptif}</p>
        </div>
      ))}
    </div>
  );
};
