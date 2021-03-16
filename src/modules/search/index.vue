<script>
import { mapState } from 'vuex';
import SearchTypesCard from './components/SearchTypesCard';
import RepositoriesSearchResults from './components/RepositoriesSearchResults';

export default {
  name: 'Search',
  components: {
    SearchTypesCard,
    RepositoriesSearchResults,
  },
  computed: {
    ...mapState('search', ['searchResult', 'searchTypes', 'searchType']),
  },
};
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="2">
        <search-types-card
          :search-types="searchTypes"
        />
      </v-col>

      <v-col cols="10">
        <repositories-search-results
          v-if="searchType === 'repositories'"
          :search-results="searchResult.items || []"
        />

        <div v-else>
          {{ searchResult }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
