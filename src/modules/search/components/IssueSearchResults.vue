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
  <div>
    {{ searchResults }}
  </div>
</template>
