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
      <v-col cols="2" style="border: 1px solid">
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
        <div class="px-3 caption"> {{ user.bio }} </div>
        <!-- <v-card outlined>
          <v-row>
            <v-col cols="5">
              <v-avatar
                color="indigo"
                size="160"
              >
                <img
                  :src="user.avatar_url"
                  alt="John"
                >
              </v-avatar>
            </v-col>

            <v-col cols="7">
              <div class="mt-2"> {{ user.name }} </div>
              <div class="caption"> {{ `@${user.login}`}} </div>
              <div class="caption"> {{ user.bio }} </div>
            </v-col>

            <v-col cols="12" class="text-end">
              Followers
            </v-col>
          </v-row>
        </v-card> -->
        <!-- <v-card outlined>
          <v-row>
            <v-col>
              <v-avatar
                color="indigo"
                size="80"
              >
                <img
                  :src="user.avatar_url"
                  alt="John"
                >
              </v-avatar>
            </v-col>

            <v-col>
              <v-card-title>
                <div>
                  <div class="headline">
                    {{ user.name }}
                  </div>
                  <div class="caption">{{ user.bio }}</div>
                  <div>(2013)</div>
                </div>
              </v-card-title>
            </v-col>
          </v-row>

          <v-divider />

          <v-card-actions class="pa-4">
            {{ user.name }}

            <v-spacer />

            <span class="grey--text text--lighten-2 caption mr-2">
              ({{ rating }})
            </span>

            <v-rating
              v-model="rating"
              background-color="white"
              color="yellow accent-4"
              dense
              half-increments
              hover
              size="18"
            />
          </v-card-actions>
        </v-card> -->
      </v-col>
    </v-row>
  </v-container>
</template>
