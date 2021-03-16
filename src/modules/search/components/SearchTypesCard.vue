<script>
export default {
  name: 'SearchTypesCard',
  props: {
    searchTypes: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    selectedItem: 0,
  }),
};
</script>

<template>
  <v-card flat>
    <v-list dense outlined class="pa-0">
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item v-for="(item, i) in searchTypes" :key="i">
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
</template>
