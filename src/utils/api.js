import data from "./data.json";

export const api = {
  skills: {
    getAll: ({ type, types } = {}) =>
      type || types
        ? data.skills.filter(({ type: skillType }) =>
            type ? skillType === type : types.includes(skillType)
          )
        : data.skills,
    // getAll: () => data.skills,
  },
  projects: {
    getAll: () => data.projects,
  },
  networks: {
    getAll: () => data.networks,
  },
  competencesExp: {
    getAll: () => data.competencesExp,
  },

  Hobbies: {
    getAll: () => data.Hobbies,
  },
};
