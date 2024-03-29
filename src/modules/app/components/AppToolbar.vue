<script>
import { mapState } from 'vuex';
import UserAvatar from '../../../components/UserAvatar';

export default {
  name: 'AppToolbar',
  components: {
    UserAvatar,
  },
  data: () => ({
    searchParameter: '',
    menus: [
      {
        name: 'navbar.home',
        url: '/',
      },
      {
        name: 'navbar.contact',
        url: '/contact',
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
    ...mapState('app', ['user']),
  },
  methods: {
    redirectToSearch() {
      const { q = '', type = '' } = this.$route.query;

      if (q !== this.searchParameter) {
        const routerParams = {
          path: 'search',
          query: { q: this.searchParameter, type: type || 'repositories' },
        };

        this.$router.push(routerParams);
      }
    },
    redirect(url) {
      this.$router.push(url);
    },
    handleLanguageChange(selectedLanguageCode) {
      localStorage.setItem('language', selectedLanguageCode);
      this.$i18n.locale = selectedLanguageCode;
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
        <v-col cols="6" class="mt-2">
          <v-btn
            v-for="menu in menus"
            :key="menu.name"
            text
            @click="redirect(menu.url)"
          >
            {{ $t(menu.name) }}
          </v-btn>
        </v-col>

        <v-spacer />

        <v-col cols="2" class="mt-2">
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

        <v-col cols="auto" class="mt-3">
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

        <v-col cols="auto">
          <user-avatar v-if="user" />

          <v-btn
            v-else
            small text
            class="mt-3"
            color="primary"
            @click="$router.push('/login')"
          >
            {{ $t('main.login') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
