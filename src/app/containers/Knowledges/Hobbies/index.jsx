import React from "react";
import { api } from "utils/api";
import "./styles.css";
export const Hobbies = () => {
  const Hobbie = api.Hobbies.getAll();
  return (
    <div className="Hobbies">
      <h3>Intérets</h3>
      <ul>
        {Hobbie.map(({ id, interest, icon }) => (
          <li className="hobby" key={id}>
            <i className={icon}></i>
            <span>{interest}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
