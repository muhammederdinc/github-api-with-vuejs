<script>
import { mapState } from 'vuex';
import SearchTypesCard from './components/SearchTypesCard';
import SearchResultsArea from './components/SearchResultsArea';

export default {
  name: 'Search',
  components: {
    SearchTypesCard,
    SearchResultsArea,
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
        <search-results-area
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
