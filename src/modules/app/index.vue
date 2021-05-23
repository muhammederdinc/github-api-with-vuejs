<script>
import { mapActions } from 'vuex';
import AppToolbar from './components/AppToolbar';
import AppNavigationMenu from './components/AppNavigationMenu';

export default {
  components: {
    AppToolbar,
    AppNavigationMenu,
  },
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
    icons: [
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
  computed: {
    isNoLayoutPage() {
      return this.$route.meta.noLayout;
    },
  },
  created() {
    const user = localStorage.getItem('user');

    if (user) this.setUser(JSON.parse(user));
  },
  methods: {
    ...mapActions('app', ['setUser']),
  },
};
</script>

<template>
  <v-app id="inspire">
    <template v-if="isNoLayoutPage">
      <router-view />
    </template>

    <template v-else>
      <app-toolbar />

      <v-main class="grey lighten-3">
        <v-container fluid>
          <v-row>
            <v-col cols="2">
              <app-navigation-menu />
            </v-col>

            <v-col cols="10">
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
                <router-view />
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer
        padless
        dense
      >
        <v-card
          class="flex"
          flat
          tile
          dense
        >
          <v-card-text class="py-2 text-center">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
</template>
