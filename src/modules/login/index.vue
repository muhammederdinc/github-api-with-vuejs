<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        username: 'muhammed',
        password: 'erdinc',
      },
      isWarningMessageVisible: false,
    };
  },
  methods: {
    ...mapActions('app', ['setUser']),
    submit() {
      const { username, password } = this.formData;

      if (username === 'muhammed' && password === 'erdinc') {
        const userParams = {
          id: 0,
          name: 'Muhammed',
          surname: 'Erdinç',
          initials: 'ME',
          username: 'muhammederdinc',
          country: { id: 'TR', name: 'Turkey' },
          city: 'Istanbul',
          email: 'test@gmail.com',
        };

        this.setUser(userParams);
        this.$router.push('/');
      } else {
        this.isWarningMessageVisible = true;
      }
    },
  },
};
</script>

<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-btn
                  class="mr-2"
                  outlined
                  x-small
                  fab
                  color="white"
                  @click="$router.go(-1)"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-toolbar-title>{{ $t('main.login') }}</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="formData.username"
                    :label="$t('main.username')"
                    type="text"
                  />

                  <v-text-field
                    v-model="formData.password"
                    id="password"
                    :label="$t('main.password')"
                    type="password"
                  />
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-alert
                  v-if="isWarningMessageVisible"
                  dense
                  outlined
                  text
                  type="error"
                >
                  {{ $t('main.login_error') }}
                </v-alert>

                <v-spacer />

                <v-btn color="primary" @click="submit">
                  {{ $t('main.login') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
