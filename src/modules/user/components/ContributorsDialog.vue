<script>
export default {
  name: 'ContributorsDialog',
  data() {
    return {
      isDialogVisible: false,
    };
  },
  mounted() {
    this.isDialogVisible = true;
  },
};
</script>

<template>
  <v-dialog
    v-model="isDialogVisible"
    width="500"
    persistent
  >
    <v-card>
      <v-card-title>
        Contributors
      </v-card-title>

      <v-card-text>
        ds
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn
          v-text="'Close'"
          color="error"
          text small
          @click="$emit('close')"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
