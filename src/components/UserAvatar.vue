<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserAvatar',
  computed: {
    ...mapState('app', ['user']),
  },
  methods: {
    ...mapActions('app', ['setUser']),
    logOut() {
      this.setUser(null);
    },
  },
};
</script>

<template>
  <v-menu
    bottom
    min-width="200px"
    rounded
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        x-large
        v-on="on"
      >
        <v-avatar
          color="brown"
          size="32"
        >
          <span class="white--text">{{ user.initials }}</span>
        </v-avatar>
      </v-btn>
    </template>

    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar color="brown">
            <span class="white--text headline">{{ user.initials }}</span>
          </v-avatar>

          <h4 class="mt-1">
            {{ user.username }}
          </h4>

          <p class="caption mt-1">
            {{ user.email }}
          </p>

          <v-divider class="my-3" />

          <v-btn
            depressed
            rounded
            text
            @click="logOut"
          >
            Çıkış Yap
          </v-btn>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>
