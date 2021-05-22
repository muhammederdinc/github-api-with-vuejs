<script>
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
  }),
  computed: {
    isNoLayoutPage() {
      return this.$route.meta.noLayout;
    },
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
    </template>
  </v-app>
</template>
