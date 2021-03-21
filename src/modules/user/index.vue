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
      <v-col cols="3">
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

        <div
          v-text="user.name"
          class="px-3 pt-3 headline"
        />

        <div class="px-3 body-1">
          {{ `@${user.login}` }}
        </div>

        <div
          v-text="user.bio"
          class="px-3 pt-3 caption"
        />

        <div class="px-3 pt-3 caption">
          <v-icon small class="pr-2">
            mdi-account-multiple
          </v-icon>

          <v-chip
            class="user-text-hover"
            x-small outlined
          >
            Follewers: <span v-text="user.followers" class="font-weight-bold caption" />
          </v-chip>

          <v-icon class="mb-1" small>
            mdi-circle-small
          </v-icon>

          <v-chip
            class="user-text-hover"
            x-small outlined
          >
            Following: <span v-text="user.following" class="font-weight-bold caption" />
          </v-chip>

          <v-chip
            class="ml-3"
            x-small outlined
          >
            Created: {{ new Date(user.created_at).getFullYear() }}
          </v-chip>
        </div>
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
