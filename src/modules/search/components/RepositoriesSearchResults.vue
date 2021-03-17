<script>
export default {
  name: 'RepositoriesSearchResults',
  props: {
    searchResults: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <v-card class="mx-2">
    <v-list three-line>
      <v-list-item-group>
        <template v-for="(item, index) in searchResults">
          <v-list-item :key="item.title">
            <template v-slot:default>
              <v-list-item-avatar>
                <v-img
                  v-if="item.owner && item.owner.avatar_url"
                  :src="item.owner.avatar_url"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.name" />

                <v-list-item-subtitle v-text="item.description" class="text--primary" />

                <v-list-item-subtitle>
                  <v-icon small color="primary">
                    mdi-star-outline
                  </v-icon>

                  <span class="caption">
                    {{ item.stargazers_count }}
                  </span>

                  <template v-if="item.language">
                    <v-icon x-small class="pl-3" color="orange darken-1">
                      mdi-circle
                    </v-icon>

                    <span class="caption">
                      {{ item.language }}
                    </span>
                  </template>

                  <span v-if="item.license" class="caption pl-3">
                    {{ item.license.name }}
                  </span>

                  <span class="caption pl-3">
                    Updated on {{ new Date(item.updated_at).getFullYear() }}
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.created_at" />
              </v-list-item-action>
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
</template>
