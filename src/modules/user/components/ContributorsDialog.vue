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
      isLoading: false,
    };
  },
  mounted() {
    this.isDialogVisible = true;

    this.fetchData();
  },
  methods: {
    ...mapActions('user', ['fetchContributors']),
    fetchData() {
      this.isLoading = true;

      this.fetchContributors(this.contributorsUrl)
        .then(({ data }) => {
          this.contributors = data;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<template>
  <v-dialog
    v-model="isDialogVisible"
    width="600"
    persistent
  >
    <v-card>
      <v-card-title>
        Contributors
      </v-card-title>

      <v-card-text id="scroll-target" class="overflow-y-auto contributors-dialog__card-text">
        <v-progress-linear
          v-if="isLoading"
          indeterminate
          color="primary"
        />

        <v-container v-else>
          <v-row v-if="!contributors.length">
            <v-col cols="12" class="d-flex justify-center">
              <v-img
                lazy-src="@/assets/images/noResult.svg"
                max-height="100"
                max-width="100"
                src="@/assets/images/noResult.svg"
              />
            </v-col>

            <v-col cols="12" class="d-flex justify-center">
              The project has not been contributed yet.
            </v-col>
          </v-row>

          <v-row
            v-else
            v-for="(contributor, index) in contributors" :key="contributor.node_id"
            align="center" no-gutters
          >
            <v-col cols="4" sm="2" md="1">
              <v-avatar size="40">
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

            <v-col cols="12" class="pt-3">
              <v-divider v-if="index < contributors.length - 1" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

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
      max-height: 600px;
    }
  }
</style>
