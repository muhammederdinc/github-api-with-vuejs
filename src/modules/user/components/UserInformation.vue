<script>
export default {
  name: 'UserInformation',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div>
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
  </div>
</template>
