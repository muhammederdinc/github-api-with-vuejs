<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'User',
  data: () => ({
    rating: 4.3,
    username: '',
  }),
  computed: {
    ...mapState('user', ['user']),
  },
  created() {
    this.username = this.$route.params.username || '';
  },
  mounted() {
    if (this.username) this.fetchData();
  },
  methods: {
    ...mapActions('user', ['fetchUserDetail']),
    fetchData() {
      this.fetchUserDetail(this.username);
    },
  },
};
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3" style="border: 1px solid">
        <div>
          <v-avatar
            color="indigo"
            size="240"
          >
            <img
              :src="user.avatar_url"
              alt="John"
            >
          </v-avatar>
        </div>

        <div class="px-3 pt-3 headline">
          {{ user.name }}
        </div>

        <div class="px-3 body-1"> {{ `@${user.login}`}} </div>

        <div class="px-3 pt-3 caption"> {{ user.bio }} </div>

        <div class="px-3 pt-3 caption">
          <v-icon small>mdi-account-multiple</v-icon>
          <span class="user-text-hover">
            Follewers: <span class="body-2"> {{ user.followers }} </span>
          </span>

          <v-icon class="mb-1" small>mdi-circle-small</v-icon>
          <span class="user-text-hover">
            Following: <span class="body-2"> {{ user.following }} </span>
          </span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
  .user-text-hover {
    &:hover {
      color: #1E88E5;
      cursor: pointer;
    }
  }
</style>
