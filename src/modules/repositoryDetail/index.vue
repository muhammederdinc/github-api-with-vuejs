<script>
import { mapActions } from 'vuex';

export default {
  name: 'RepositoryDetail',
  data() {
    return {
      repositoryDetail: null,
    };
  },
  mounted() {
    this.fetchRepositoryDetail();
  },
  methods: {
    ...mapActions('app', ['fetchData']),
    fetchRepositoryDetail() {
      this.fetchData(this.$route.query.endpoint)
        .then(({ data }) => {
          this.repositoryDetail = data;
        });
    },
  },
};
</script>

<template>
  <div>
    <v-toolbar dense flat outlined>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    {{ repositoryDetail }}
  </div>
</template>
