<script>
import { mapActions, mapState } from 'vuex';
import UserRepositories from './components/UserRepositories';
import UserInformation from './components/UserInformation';
import UserFollowersOrFollowingDialog from './components/UserFollowersOrFollowingDialog';

export default {
  name: 'User',
  components: {
    UserRepositories,
    UserInformation,
    UserFollowersOrFollowingDialog,
  },
  data: () => ({
    username: '',
    isUserFollowersDialogVisible: false,
    followersOrFollowingUrl: '',
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
    showFollowersOrFollowing(url) {
      this.isUserFollowersDialogVisible = true;
      this.followersOrFollowingUrl = url;
    },
  },
};
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3" xs="12" sm="12" lg="3">
        <user-information
          :user="user"
          @showFollowersOrFollowing="showFollowersOrFollowing"
        />
      </v-col>

      <v-col cols="9" xs="12" sm="12" lg="9">
        <user-repositories :repositories="repos" />
      </v-col>
    </v-row>

    <user-followers-or-following-dialog
      v-if="isUserFollowersDialogVisible"
      :followers-or-following-url="followersOrFollowingUrl"
      @close="isUserFollowersDialogVisible = false"
    />
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
