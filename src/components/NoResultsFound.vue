<script>
export default {
  name: 'NoResultsFound',
};
</script>

<template>
  <v-row
    class="no-search-results-found"
    justify="center"
    align="center"
  >
    <v-col
      cols="12"
      class="d-flex justify-center align-center"
    >
      <v-img
        max-width="250"
        src="@/assets/images/noSearchResultsFound.svg"
      />
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
  .no-search-results-found {
    min-height: 65vh;
  }
</style>
