import axios from "axios";

const GithubAPI = "https://api.github.com";

export const githubServices = {
  getUserRepos: async (username) => {
    try {
      const res = await axios.get(`${GithubAPI}/users/${username}/repos`);
      return res.data;
    } catch (error) {
      console.log("error al obtener los repositorios", error);
      throw error;
    }
  },

  getRepo: async (username, repoName) => {
    try {
      const res = await axios.get(`${GithubAPI}/repos/${username}/${repoName}`);
      return res.data;
    } catch (error) {
      console.log("error al obtener el repositorio", error);
      throw error;
    }
  },
};
