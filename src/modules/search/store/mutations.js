export default {
  setSearchResult(state, searchResult) {
    state.searchResult = searchResult;

    state.searchTypes.find(
      (item) => item.type === state.searchType,
    ).totalCount = searchResult.total_count;
  },
  changeGithubSearchType(state, newSearchType) {
    state.searchType = newSearchType;
  },
  setSearchParams(state, newParameter) {
    state.searchParameter = newParameter;
  },
};
