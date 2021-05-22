<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    ...mapActions('app', ['setUser']),
    submit() { /* eslint-disable */
      const { username, password } = this.formData;

      if (username === 'muhammed' && password === 'erdinc') {
        const userParams = {
          id: 0,
          name: 'Muhammed',
          surname: 'Erdinç',
          username: 'muhammederdinc',
          country: 'Turkey',
          city: 'Istanbul',
          email: 'test@gmail.com'
        };

        this.setUser(userParams);
        this.$router.push('/');
        console.log('Login Başarılı');
      } else {
        console.log('Login BAŞARISIZ');
      }
    },
  },
};
</script>

<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="formData.username"
                    name="login"
                    label="Login"
                    type="text"
                  />

                  <v-text-field
                    v-model="formData.password"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                  />
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="submit">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
