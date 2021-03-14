export default {
  setSearchResult(state, searchResult) {
    state.searchResult = searchResult;

    state.numbersOfSearchResults.find(
      (item) => item.type === state.searchType,
    ).totalCount = searchResult.total_count;
  },
};
