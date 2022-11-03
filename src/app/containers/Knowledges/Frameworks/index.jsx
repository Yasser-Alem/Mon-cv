import React, { Component } from "react";
import { ProgresseBar } from "./ProgresseBar";
import { api } from "../../../../utils/api";

import "./styles.css";

export const Frameworks = (state) => {
  const skills = api.skills.getAll();
  return (
    <div className="languagesFrameworks">
      <ProgresseBar
        languages={skills.filter(
          (language) => language.type === "programming_language"
        )}
        className="languages-display"
        title="languages"
        type="programming_language"
      />
      <ProgresseBar
        languages={skills.filter(
          (framework) =>
            framework.type === "framework" || framework.type === "cms"
        )}
        className="frameworks-display"
        title="frameworks & bibliothéques"
      />
    </div>
  );
};
