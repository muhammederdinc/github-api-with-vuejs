<script>
import { mapActions, mapState } from 'vuex';
import SearchTypesCard from './components/SearchTypesCard';
import RepositoriesSearchResults from './components/RepositoriesSearchResults';
import UserSearchResults from './components/UserSearchResults';
import IssueSearchResults from './components/IssueSearchResults';

export default {
  name: 'Search',
  components: {
    SearchTypesCard,
    RepositoriesSearchResults,
    UserSearchResults,
    IssueSearchResults,
  },
  data() {
    return {
      searchParams: {},
    };
  },
  computed: {
    ...mapState('search', ['searchResult', 'searchTypes']),
  },
  watch: { // eslint-disable-next-line
    '$route.query.q': function () {
      this.fetchData();
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions('search', ['searchOnGithub']),
    fetchData(newSearchType = null) {
      const { q = '', type = '' } = this.$route.query;
      const searchParams = { type: newSearchType || type, searchParameter: q };
      const routerParams = { path: 'search', query: { q, type: newSearchType || type } };

      if (newSearchType) this.$router.push(routerParams);

      this.searchOnGithub(searchParams);
    },
  },
};
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="2">
        <search-types-card
          :search-types="searchTypes"
          @search="fetchData"
        />
      </v-col>

      <v-col cols="10">
        <repositories-search-results
          v-if="$route.query.type === 'repositories'"
          :search-results="searchResult.items || []"
        />

        <user-search-results
          v-else-if="$route.query.type === 'users'"
          :search-results="searchResult.items || []"
        />

        <issue-search-results
          v-else-if="$route.query.type === 'issues'"
          :search-results="searchResult.items || []"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
