<script>
import { mapActions, mapState } from 'vuex';

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
    ...mapState('searchResults', ['searchType']),
  },
  methods: {
    ...mapActions('searchResults', ['searchOnGithub']),
    searchAndRedirect() {
      const { path } = this.$router.currentRoute;

      if (path !== '/searchResults') {
        this.$router.push('/searchResults');
      }

      const searchParams = {
        type: this.searchType,
        searchParameter: this.searchParameter,
      };

      this.searchOnGithub(searchParams);
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
          @keyup.enter="searchAndRedirect"
        />
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
