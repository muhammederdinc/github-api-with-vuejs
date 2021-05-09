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
      const params = {
        type,
        total: type === 'followers' ? this.user.followers : this.user.following,
      };

      this.$emit('showFollowersOrFollowing', params);
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
        <v-icon small color="primary" class="pr-2">
          mdi-account-multiple
        </v-icon>

        <v-chip
          class="user-text-hover"
          x-small outlined color="primary"
          @click="showFollowersOrFollowing('followers')"
        >
          {{ $t('main.followers') }}: <span v-text="user.followers" />
        </v-chip>

        <v-icon class="mb-1" small>
          mdi-circle-small
        </v-icon>

        <v-chip
          class="user-text-hover"
          x-small outlined color="primary"
          @click="showFollowersOrFollowing('following')"
        >
          {{ $t('main.following') }}: <span v-text="user.following" />
        </v-chip>
      </v-col>

      <v-col v-if="user.created_at" cols="12">
        <v-icon small color="primary" class="pr-2">
          mdi-calendar-check
        </v-icon>

        <v-chip x-small outlined color="primary">
          {{ $t('main.created') }}: {{ new Date(user.created_at).getFullYear() }}
        </v-chip>
      </v-col>

      <v-col
        v-if="user.company"
        class="pt-2 caption" cols="12"
      >
        <v-icon
          class="mb-1"
          color="primary"
          small
        >
          mdi-domain
        </v-icon>

        {{ user.company }}
      </v-col>

      <v-col
        v-if="user.location"
        class="pt-2 caption" cols="12"
      >
        <v-icon
          class="mb-1"
          color="primary"
          small
        >
          mdi-map-marker
        </v-icon>

        {{ user.location }}
      </v-col>

      <v-col
        v-if="user.blog"
        class="pt-2 caption text-truncate" cols="12"
      >
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
      </v-col>

      <v-col
        v-if="user.twitter_username"
        class="pt-2 caption text-truncate" cols="12"
      >
        <v-icon
          color="primary"
          small
        >
          mdi-twitter
        </v-icon>

        {{ user.twitter_username }}
      </v-col>
    </v-row>
  </v-container>
</template>
