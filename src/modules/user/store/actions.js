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
  fetchContributors(_, url) {
    return axios.get(url);
  },
  fetchFollowersOrFollowing(_, params) {
    const { username = '', type = '' } = params;

    return axios.get(`users/${username}/${type}`);
  },
};
