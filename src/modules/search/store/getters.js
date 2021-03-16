export default {
  getSearchParameter(state) {
    return {
      type: state.searchType,
      searchParameter: state.searchParameter,
    };
  },
};
