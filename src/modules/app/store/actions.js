import axios from 'axios';

export default {
  setUser({ commit }, user) {
    commit('setUser', user);
  },
  fetchData(_, endpoint) {
    return axios.get(endpoint);
  },
  fetchRepositoryBranches(_, endpoint) {
    return axios.get(`${endpoint}/branches`);
  },
};
