export default () => ({
  searchType: 'repositories',
  searchResult: {},
  searchParameter: '',
  searchTypes: [
    { type: 'repositories', text: 'Repositories', totalCount: null },
    { type: 'code', text: 'Code', totalCount: null },
    { type: 'commits', text: 'Commits', totalCount: null },
    { type: 'issues', text: 'Issues', totalCount: null },
    { type: 'discussions', text: 'Discussions', totalCount: null },
    { type: 'packages', text: 'Packages', totalCount: null },
    { type: 'marketplace', text: 'Marketplace', totalCount: null },
    { type: 'topics', text: 'Topics', totalCount: null },
    { type: 'wikis', text: 'Wikis', totalCount: null },
    { type: 'users', text: 'Users', totalCount: null },
  ],
});
