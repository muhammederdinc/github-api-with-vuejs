export default () => ({
  searchType: 'repositories',
  searchResult: {},
  searchParameter: '',
  searchTypes: [
    { type: 'repositories', text: 'Repositories', totalCount: null },
    { type: 'issues', text: 'Issues', totalCount: null },
    { type: 'users', text: 'Users', totalCount: null },
  ],
});
