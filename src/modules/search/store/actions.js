import axios from 'axios';

export default {
  searchOnGithub({ commit }, params) {
    axios.get(`search/${params.type}?q=${params.searchParameter}`)
      .then(({ data }) => {
        commit('setSearchResult', data);
        commit('setSearchParams', params.searchParameter);
      });
  },
  changeGithubSearchType({ commit }, newSearchType) {
    commit('changeGithubSearchType', newSearchType);
  },
};
