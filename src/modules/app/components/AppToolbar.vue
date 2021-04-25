<script>
import { mapState } from 'vuex';

export default {
  name: 'AppToolbar',
  data: () => ({
    searchParameter: '',
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
  computed: {
    ...mapState('search', ['searchType']),
  },
  methods: {
    redirectToSearch() {
      const { q = '', type = '' } = this.$route.query;

      if (q !== this.searchParameter || type !== this.searchType) {
        const routerParams = {
          path: 'search',
          query: { q: this.searchParameter, type: this.searchType },
        };

        this.$router.push(routerParams);
      }
    },
  },
};
</script>

<template>
  <v-app-bar
    app
    color="white"
    flat
  >
    <v-container class="py-0 fill-height">
      <v-avatar
        class="mr-10"
        color="grey darken-1"
        size="32"
      />

      <v-btn
        v-for="link in links"
        :key="link"
        text
      >
        {{ link }}
      </v-btn>

      <v-spacer />

      <v-responsive max-width="260">
        <v-text-field
          v-model="searchParameter"
          dense
          flat
          hide-details
          rounded
          solo-inverted
          @keyup.enter="redirectToSearch"
        />
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
