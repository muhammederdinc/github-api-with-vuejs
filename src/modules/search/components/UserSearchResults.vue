<script>
export default {
  name: 'UserSearchResults',
  props: {
    searchResults: {
      type: Array,
      required: true,
    },
  },
  methods: {
    redirectToUserDetail(username) {
      const routerParams = {
        name: 'User',
        params: { username },
      };

      this.$router.push(routerParams);
    },
  },
};
</script>

<template>
  <div>
    <v-card outlined class="mx-2">
      <v-list two-line>
        <v-list-item-group>
          <template v-for="(item, index) in searchResults">
            <v-list-item :key="item.id">
              <template v-slot:default>
                <v-list-item-avatar>
                  <v-img
                    :src="item.avatar_url"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.login"
                    @click="redirectToUserDetail(item.login)"
                  />

                  <v-list-item-subtitle v-if="item.type" class="caption text--primary pt-1">
                    <v-icon x-small color="primary">
                      mdi-account
                    </v-icon>

                    {{ item.type }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-divider
              v-if="index < searchResults.length - 1"
              :key="index"
            />
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>
