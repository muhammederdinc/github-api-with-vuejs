import axios from 'axios';

export default {
  fetchUserDetail({ commit }, username) {
    axios.get(`users/${username}`)
      .then(({ data }) => {
        commit('setUser', data);
      });
  },
};
