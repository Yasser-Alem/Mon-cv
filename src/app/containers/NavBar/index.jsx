import React from "react";
import { NavLink } from "react-router-dom";
import { api } from "utils/api";
import profilPicture from "./assets/photoCv.jpg";
import "./styles.css";

export const NavBar = () => {
  const network = api.networks.getAll();
  return (
    <div className="sideBar">
      <div className="id">
        <div className="idContent">
          <img src={profilPicture} alt="profil-picture" width="150px" />
          <h2>Yasser ALEM</h2>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "NavActive" : "")}
              to="/"
            >
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "NavActive" : "")}
              to="/knowledges"
            >
              <i className="fas fa-mountain"></i>
              <span>Competences </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "NavActive" : "")}
              to="/portfolio"
            >
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "NavActive" : "")}
              to="/contact"
            >
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
          <NavLink to="*"></NavLink>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          {network.map(({ id, link, icon }) => (
            <li key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <div className="signature">
          <p> Yasser ALEM - 2021</p>
        </div>
      </div>
    </div>
  );
};
