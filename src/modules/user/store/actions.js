import axios from 'axios';

export default {
  fetchUserDetail({ commit }, username) {
    axios.get(`users/${username}`)
      .then(({ data }) => {
        commit('setUser', data);
      });
  },
  fetchUserRepos({ commit }, username) {
    axios.get(`users/${username}/repos`)
      .then(({ data }) => {
        commit('setRepos', data);
      });
  },
  fetchFollowersOrFollowing(_, params) {
    const { username = '', type = '', page = 1 } = params;

    return axios.get(`users/${username}/${type}?per_page=30&page=${page}`);
  },
};
