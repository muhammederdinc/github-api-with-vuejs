export default () => ({
  searchResult: {
    repositories: {},
    issues: {},
    users: {},
  },
  searchTypes: [
    { type: 'repositories', text: 'main.repositories', totalCount: null },
    { type: 'issues', text: 'main.issues', totalCount: null },
    { type: 'users', text: 'main.users', totalCount: null },
  ],
});
