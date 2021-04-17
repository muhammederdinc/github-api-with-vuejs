<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'User',
  data: () => ({
    rating: 4.3,
    username: '',
  }),
  computed: {
    ...mapState('user', ['user', 'repos']),
  },
  created() {
    this.username = this.$route.params.username || '';
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

        <div class="pt-2 caption text-center">
          <template v-if="user.company">
            <v-icon
              class="mb-1"
              color="primary"
              small
            >
              mdi-domain
            </v-icon>

            {{ user.company }}
          </template>

          <template v-if="user.location">
            <v-icon
              class="mb-1 pl-2"
              color="primary"
              small
            >
              mdi-map-marker
            </v-icon>

            {{ user.location }}
          </template>
        </div>

        <div class="pt-2 caption text-truncate">
          <template v-if="user.blog">
            <v-icon
              color="primary"
              small
            >
              mdi-link
            </v-icon>

            <a
              v-text="user.blog"
              :href="user.blog"
              target="_blank"
            />
          </template>

          <template v-if="user.twitter_username">
            <v-icon
              class="pl-2"
              color="primary"
              small
            >
              mdi-twitter
            </v-icon>

            {{ user.twitter_username }}
          </template>
        </div>
      </v-col>

      <v-col cols="9" sm="12" lg="9" style="border: 1px solid">
        <v-data-iterator
          :items="repos"
          items-per-page.sync="4"
        >
          <template v-slot:default="{ items }">
            <v-row>
              <v-col v-for="item in items" :key="item.id" cols="12">
                <v-card outlined>
                  <v-card-title>
                    <v-row>
                      <v-col cols="9">
                        {{ item.name }}
                      </v-col>

                      <v-col cols="3" class="text-right caption pa-0 ma-0">
                        Created: {{ item.created_at }}

                        <br />

                        <v-chip x-small class="ma-2" color="deep-purple accent-4" outlined>
                          <v-icon x-small left>mdi-star</v-icon>
                          {{ item.stargazers_count }}
                        </v-chip>

                        <v-chip x-small class="ma-2" color="deep-purple accent-4" outlined>
                          <v-icon x-small left>mdi-eye</v-icon>
                          {{ item.watchers_count }}
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-card-title>

                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        {{ item.description && item.description.length > 350 ?
                        `${item.description.substring(0, 349)}...` : item.description }}
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
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
