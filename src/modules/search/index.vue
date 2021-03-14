<script>
import { mapState } from 'vuex';

export default {
  name: 'Search',
  data: () => ({
    selectedItem: 0,
  }),
  computed: {
    ...mapState('search', ['searchResult', 'numbersOfSearchResults']),
  },
};
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="2">
        <v-card flat>
          <v-list dense outlined class="pa-0">
            <v-list-item-group
              v-model="selectedItem"
              color="primary"
            >
              <v-list-item v-for="(item, i) in numbersOfSearchResults" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.text" />
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text>
                    <v-chip
                      v-if="item.totalCount"
                      class="white--text grey darken-1"
                      x-small
                    >
                      {{ item.totalCount }}
                    </v-chip>
                  </v-list-item-action-text>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="10">
        <template>
          <v-card class="mx-2">
            <v-list three-line>
              <v-list-item-group>
                <template v-for="(item, index) in searchResult.items">
                  <v-list-item :key="item.title">
                    <template v-slot:default>
                      <v-list-item-avatar>
                        <v-img :src="item.owner.avatar_url" />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-text="item.name" />

                        <v-list-item-subtitle v-text="item.description" class="text--primary" />

                        <v-list-item-subtitle>
                          <v-icon small color="primary">mdi-star-outline</v-icon>
                          <span class="caption">
                            {{ item.stargazers_count }}
                          </span>

                          <template v-if="item.language">
                            <v-icon small class="pl-3" color="orange darken-1">mdi-circle</v-icon>
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
                    v-if="index < searchResult.items.length - 1"
                    :key="index"
                  />
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>
