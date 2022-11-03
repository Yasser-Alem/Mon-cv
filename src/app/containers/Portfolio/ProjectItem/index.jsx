import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export const ProjectItem = ({
  item: { title, skills, source, details, images },
  skills: skillsData,
}) => {
  const [show, setShow] = useState(false);

  const handleModalClose = (e) => {
    setShow(false);
  };

  const handleModalOpen = () => {
    setShow(true);
  };

  const skillProps = (id) => {
    const { icon } = skillsData.filter(({ id: skillId }) => skillId === id)[0];

    return {
      className: icon,
      key: id,
    };
  };

  return (
    <div className="project">
      <div className="icons">
        {skills.map((id) => (
          <i {...skillProps(id)}></i>
        ))}
      </div>
      <div>
        <h3>{title}</h3>
        <AwesomeSlider>
          {images.map((image, id) => (
            <div key={id} data-src={image} onClick={handleModalOpen} />
          ))}
        </AwesomeSlider>
        <span className="infos">
          <i className="fas fa-plus-circle" onClick={handleModalOpen}></i>
        </span>
      </div>
      {handleModalOpen && (
        <div className="showInfos" hidden={!show}>
          <div className="infosContent">
            <div className="head">
              <h2>{title}</h2>
              <div className="sourceCode">
                <a
                  href={source}
                  rel="noopener noreferrer"
                  className="button"
                  target="_blank"
                >
                  code source
                </a>
              </div>
            </div>
            <p className="text">{details}</p>
            <div className="button return" onClick={handleModalClose}>
              Retourner sur la page
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
