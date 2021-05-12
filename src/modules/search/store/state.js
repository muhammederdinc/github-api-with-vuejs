import i18n from '@/i18n';

export default () => ({
  searchResult: {
    repositories: {},
    issues: {},
    users: {},
  },
  searchTypes: [
    { type: 'repositories', text: i18n.t('main.repositories'), totalCount: null },
    { type: 'issues', text: i18n.t('main.issues'), totalCount: null },
    { type: 'users', text: i18n.t('main.users'), totalCount: null },
  ],
});
