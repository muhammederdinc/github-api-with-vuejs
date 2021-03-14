import axios from 'axios';

export default {
  searchOnGithub({ commit }, params) {
    axios.get(`https://api.github.com/search/${params.type}?q=${params.searchParameter}`)
      .then(({ data }) => {
        commit('setSearchResult', data);
      });
  },
};
