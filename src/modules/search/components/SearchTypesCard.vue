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
  created() {
    if (this.$route.query && this.$route.query.type) {
      if (this.$route.query.type === 'repositories') this.selectedItem = 0;
      else if (this.$route.query.type === 'issues') this.selectedItem = 1;
      else if (this.$route.query.type === 'users') this.selectedItem = 2;
    }
  },
  methods: {
    changeSearchType(newSearchType) {
      this.$emit('search', newSearchType);
    },
  },
};
</script>

<template>
  <v-card flat>
    <v-list dense outlined class="pa-0">
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in searchTypes" :key="i"
          @click="changeSearchType(item.type)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-action-text>
              <v-chip
                class="white--text grey darken-1"
                x-small
              >
                {{ item.totalCount || 0 }}
              </v-chip>
            </v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
