<script>
export default {
  name: 'UserInformation',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showFollowersOrFollowing(type) {
      this.$emit('showFollowersOrFollowing', type);
    },
  },
};
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-avatar size="240">
          <img :src="user.avatar_url" :alt="user.name">
        </v-avatar>
      </v-col>

      <v-col v-text="user.name" class="pt-3 headline" cols="12" />

      <v-col v-text="`@${user.login}`" class="body-1" cols="12" />

      <v-col v-if="user.bio" v-text="user.bio" class="pt-3 caption" cols="12" />

      <v-col class="pt-3 caption" cols="12">
        <v-icon small class="pr-2">
          mdi-account-multiple
        </v-icon>

        <v-chip
          class="user-text-hover"
          x-small outlined
          @click="showFollowersOrFollowing('followers')"
        >
          Follewers: <span v-text="user.followers" />
        </v-chip>

        <v-icon class="mb-1" small>
          mdi-circle-small
        </v-icon>

        <v-chip
          class="user-text-hover"
          x-small outlined
          @click="showFollowersOrFollowing('following')"
        >
          Following: <span v-text="user.following" />
        </v-chip>
      </v-col>

      <v-col v-if="user.created_at" cols="12">
        <v-icon small class="pr-2">
          mdi-calendar-check
        </v-icon>

        <v-chip x-small outlined>
          Created: {{ new Date(user.created_at).getFullYear() }}
        </v-chip>
      </v-col>

      <v-col class="pt-2 caption" cols="12">
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
      </v-col>

      <v-col class="pt-2 caption text-truncate">
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
      </v-col>
    </v-row>
  </v-container>
</template>
