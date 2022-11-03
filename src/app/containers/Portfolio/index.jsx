import React from "react";
import { api } from "utils/api";
import { ProjectItem } from "./ProjectItem";
import "./style.css";

export const Portfolio = () => {
  const [currentSkillFilter, setSkillFilter] = React.useState();
  const [projectsSkills, setProjectsSkills] = React.useState();
  const skills = api.skills.getAll();
  const projects = api.projects.getAll();

  React.useEffect(() => {
    if (skills && projects) {
      setProjectsSkills(
        [...new Set(projects.map(({ skills }) => skills).flat())].map(
          (skillId) => skills.filter(({ id }) => id === skillId)[0]
        )
      );
    }
  }, [skills, projects]);

  return (
    <div className="portfolioContent">
      {projectsSkills && (
        <>
          <div className="filters">
            {projectsSkills.map(({ id, value }) => (
              <div
                className={[
                  "skills",
                  currentSkillFilter === id ? "active-skills" : "",
                ].join(" ")}
                key={id}
                onClick={() =>
                  setSkillFilter((oldValue) =>
                    oldValue === id ? undefined : id
                  )
                }
              >
                {value}
              </div>
            ))}
          </div>

          <div className="projects">
            {projects.map((item) =>
              !currentSkillFilter ||
              item.skills.includes(currentSkillFilter) ? (
                <ProjectItem
                  key={item.id}
                  item={item}
                  skills={projectsSkills}
                />
              ) : null
            )}
          </div>
        </>
      )}
    </div>
  );
};
