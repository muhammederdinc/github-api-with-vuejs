<script>
import { mapActions } from 'vuex';

export default {
  name: 'ContributorsDialog',
  props: {
    contributorsUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isDialogVisible: false,
      contributors: [],
    };
  },
  mounted() {
    this.isDialogVisible = true;

    this.fetchData();
  },
  methods: {
    ...mapActions('user', ['fetchContributors']),
    fetchData() {
      this.fetchContributors(this.contributorsUrl)
        .then(({ data }) => {
          this.contributors = data;
        });
    },
  },
};
</script>

<template>
  <v-dialog
    v-model="isDialogVisible"
    width="400"
    persistent
  >
    <v-card>
      <v-card-title>
        Contributors
      </v-card-title>

      <v-card-text id="scroll-target" class="overflow-y-auto contributors-dialog__card-text">
        <v-row
          v-for="contributor in contributors" :key="contributor.node_id"
          align="center" class="spacer" no-gutters
        >
          <v-col cols="4" sm="2" md="1">
            <v-avatar size="26px">
              <img
                :src="contributor.avatar_url"
                :alt="contributor.login"
              >
            </v-avatar>
          </v-col>

          <v-col class="pl-2">
            <strong v-text="contributor.login" />

            <span
              v-text="`(contributions: ${contributor.contributions})`"
              class="pl-1 caption"
            />
          </v-col>
        </v-row>
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

<style lang="scss">
  .contributors-dialog {
    &__card-text {
      max-height: 400px
    }
  }
</style>
