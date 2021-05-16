import axios from 'axios';

export default {
  searchUsers({ commit }, searchParameter) {
    axios.get(`search/users?q=${searchParameter}`)
      .then(({ data }) => {
        const searchResultParams = { type: 'users', searchResult: data };

        commit('setSearchResult', searchResultParams);
      });
  },
  searchRepositories({ commit }, searchParameter) {
    axios.get(`search/repositories?q=${searchParameter}`)
      .then(({ data }) => {
        const searchResultParams = { type: 'repositories', searchResult: data };

        commit('setSearchResult', searchResultParams);
      });
  },
  searchIssues({ commit }, searchParameter) {
    axios.get(`search/issues?q=${searchParameter}`)
      .then(({ data }) => {
        const searchResultParams = { type: 'issues', searchResult: data };

        commit('setSearchResult', searchResultParams);
      });
  },
};
