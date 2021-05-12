<script>
export default {
  name: 'Home',
};
</script>

<template>
  <v-container>
    <v-row class="welcome-page" row no-gutters justify="center">
      <v-col cols="auto" align-self="center">
        <v-img
          max-height="800"
          max-width="800"
          src="@/assets/images/landing.svg"
        />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="auto" class="caption">
        {{ $t('main.welcome') }}
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
  .welcome-page {
    height: 70vh;
  }
</style>
