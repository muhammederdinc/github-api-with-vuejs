<script>
import { mapState } from 'vuex';

export default {
  name: 'AppToolbar',
  data: () => ({
    searchParameter: '',
    menus: [
      {
        name: 'Dashboard',
        url: '/',
      },
      {
        name: 'Messages',
        url: '/message',
      },
      {
        name: 'Profile',
        url: '/',
      },
      {
        name: 'Updates',
        url: '/',
      },
    ],
    languages: [
      {
        id: 'en',
        text: 'English',
      },
      {
        id: 'tr',
        text: 'Türkçe',
      },
    ],
  }),
  computed: {
    ...mapState('search', ['searchType']),
  },
  methods: {
    redirectToSearch() {
      const { q = '', type = '' } = this.$route.query;

      if (q !== this.searchParameter || type !== this.searchType) {
        const routerParams = {
          path: 'search',
          query: { q: this.searchParameter, type: this.searchType },
        };

        this.$router.push(routerParams);
      }
    },
    redirect(url) {
      this.$router.push(url);
    },
    handleLanguageChange(selectedLanguageCode) {
      localStorage.setItem('language', selectedLanguageCode);
      window.location.reload();
    },
  },
};
</script>

<template>
  <v-app-bar
    app
    color="white"
    flat
  >
    <v-container fluid class="py-0 ma-0">
      <v-row>
        <v-col cols="6">
          <v-btn
            v-for="menu in menus"
            :key="menu.name"
            text
            @click="redirect(menu.url)"
          >
            {{ menu.name }}
          </v-btn>
        </v-col>

        <v-spacer />

        <v-col cols="2">
          <v-text-field
            v-model="searchParameter"
            dense
            flat
            hide-details
            rounded
            solo-inverted
            @keyup.enter="redirectToSearch"
          />
        </v-col>

        <v-col cols="auto" class="mt-1">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                icon small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-translate</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in languages"
                :key="index"
                link
                @click="handleLanguageChange(item.id)"
              >
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
