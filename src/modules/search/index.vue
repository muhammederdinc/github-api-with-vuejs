<script>
export default {
  name: 'Search',
  data: () => ({
    selectedItem: 0,
    items: [
      { text: 'Repositories', action: 557 },
      { text: 'Code', action: 4 },
      { text: 'Commits', action: 4 },
      { text: 'Issues', action: 4 },
      { text: 'Discussions', action: 4 },
      { text: 'Packages', action: 4 },
      { text: 'Marketplace', action: 4 },
      { text: 'Topics', action: 4 },
      { text: 'Wikis', action: 4 },
      { text: 'Users', action: 4 },
    ],
  }),
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
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text>
                    <v-chip class="white--text grey darken-1" x-small>
                      {{ item.action }}
                    </v-chip>
                  </v-list-item-action-text>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col>
        2
      </v-col>
    </v-row>
  </v-container>
</template>
