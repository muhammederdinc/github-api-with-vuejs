import axios from 'axios';

export default { /* eslint-disable*/
  fetchUserDetail({ commit }, username) {
    axios.get(`users/${username}`)
      .then(({ data }) => {
        commit('setUser', data);
      });
  },
};
