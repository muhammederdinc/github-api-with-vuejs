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
    selected: [2],
    items2: [
      {
        action: '15 min',
        headline: 'Brunch this weekend?',
        subtitle: 'Ill be in your neighborhood doing',
        title: 'Ali Connors',
      },
      {
        action: '2 hr',
        headline: 'Summer BBQ',
        subtitle: 'Wish I could come, but  out of town this weekend.',
        title: 'me, Scrott, Jennifer',
      },
      {
        action: '6 hr',
        headline: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        title: 'Sandra Adams',
      },
      {
        action: '12 hr',
        headline: 'Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        title: 'Trevor Hansen',
      },
      {
        action: '18hr',
        headline: 'Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        title: 'Britta Holt',
      },
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
        <template>
          <v-card
            class="mx-2"
          >
            <v-list two-line>
              <v-list-item-group
                v-model="selected"
                active-class="pink--text"
              >
                <template v-for="(item, index) in items2">
                  <v-list-item :key="item.title">
                    <template v-slot:default="{ active }">
                      <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>

                        <v-list-item-subtitle
                          class="text--primary"
                          v-text="item.headline"
                        ></v-list-item-subtitle>

                        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                        <v-icon
                          v-if="!active"
                          color="grey lighten-1"
                        >
                          mdi-star-outline
                        </v-icon>

                        <v-icon
                          v-else
                          color="yellow darken-3"
                        >
                          mdi-star
                        </v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index < items.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>
