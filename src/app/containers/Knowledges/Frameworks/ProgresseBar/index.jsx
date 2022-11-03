import React from "react";
export const ProgresseBar = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Années d'Experiences</span>
        <span> 1 an</span>
        <span> 2 ans</span>
      </div>
      <div>
        {props.languages.map((item) => {
          let levelYears = 2;
          let progressBar = (item.level / levelYears) * 100 + "%";
          return (
            <div key={item.id} className="languages-list">
              <ul>
                <li>{item.value}</li>
              </ul>
              <div
                className="progress-bar"
                style={{ width: progressBar }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
