export default {
  setSearchResult(state, { type, searchResult }) {
    if (type === 'users') state.searchResult.users = searchResult;
    else if (type === 'repositories') state.searchResult.repositories = searchResult;
    else if (type === 'issues') state.searchResult.issues = searchResult;

    state.searchTypes.find((item) => item.type === type).totalCount = searchResult.total_count;
  },
};
