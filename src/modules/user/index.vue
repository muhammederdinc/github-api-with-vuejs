<script>
import { mapActions, mapState } from 'vuex';
import UserRepositories from './components/UserRepositories';
import UserInformation from './components/UserInformation';

export default {
  name: 'User',
  components: {
    UserRepositories,
    UserInformation,
  },
  data: () => ({
    rating: 4.3,
    username: '',
  }),
  computed: {
    ...mapState('user', ['user', 'repos']),
  },
  created() {
    this.username = this.$route.query.username || '';
  },
  mounted() {
    if (this.username) {
      this.fetchData();
      this.fetchRepos();
    }
  },
  methods: {
    ...mapActions('user', ['fetchUserDetail', 'fetchUserRepos']),
    fetchData() {
      this.fetchUserDetail(this.username);
    },
    fetchRepos() {
      this.fetchUserRepos(this.username);
    },
  },
};
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3" sm="12" lg="3">
        <user-information :user="user" />
      </v-col>

      <v-col cols="9" sm="12" lg="9">
        <user-repositories :repositories="repos" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
  .user-text-hover {
    &:hover {
      color: #1E88E5;
      cursor: pointer;
    }
  }
</style>
