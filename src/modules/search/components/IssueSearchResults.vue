<script>
export default {
  name: 'IssueSearchResult',
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
          <v-list-item :key="item.id">
            <template v-slot:default>
              <v-list-item-avatar>
                <v-img
                  v-if="item.user && item.user.avatar_url"
                  :src="item.user.avatar_url"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  <span>
                    {{ item.title }}
                  </span>

                  <span class="caption">
                    {{ `#${item.number}` }}
                  </span>
                </v-list-item-title>

                <v-list-item-subtitle
                  v-text="item.body"
                  class="caption text--primary"
                />

                <v-list-item-subtitle>
                  <v-chip-group
                    column
                  >
                    <v-chip
                      v-for="label in item.labels"
                      :key="label.id"
                      small
                      outlined
                      color="primary"
                    >
                      {{ label.name }}
                    </v-chip>
                  </v-chip-group>
                </v-list-item-subtitle>

                <v-list-item-subtitle v-if="item.user && item.user.login" class="caption">
                  {{ item.user.login }} - Created: {{ item.created_at }}
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
</template>
