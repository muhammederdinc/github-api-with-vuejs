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
    ...mapState('search', ['searchResult', 'searchTypes']),
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
          :search-results="searchResult.items || []"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
