<script>
export default {
  name: 'AppNavigationMenu',
};
</script>

<template>
  <v-sheet rounded="lg">
    <v-list color="transparent">
      <v-list-item
        v-for="n in 5"
        :key="n"
        link
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ $t('main.list_item') }} {{ n }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>
