import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { api } from "utils/api";
import "./style.css";

export const Contact = () => {
  const networks = api.networks.getAll();
  return (
    <div className="contact">
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Lyon</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="06 96 85 45 34">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié!");
                  }}
                >
                  {" "}
                  06 96 85 45 34{" "}
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="Yasser.alem25@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié!");
                  }}
                >
                  {" "}
                  Yasser.alem25@gmail.com{" "}
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork2">
          <ul>
            {networks.map(({ id, link, network, icon }) => (
              <a href={link} target="_blank" rel="noopener noreferer" key={id}>
                <h4>{network}</h4>
                <i className={icon}></i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
