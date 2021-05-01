<script>
import { mapActions } from 'vuex';

export default {
  name: 'UserFollowersOrFollowingDialog',
  props: {
    followersOrFollowingUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isDialogVisible: false,
      users: [],
    };
  },
  mounted() {
    this.isDialogVisible = true;
    this.fetchData();
  },
  methods: {
    ...mapActions('user', ['fetchFollowersOrFollowing']),
    fetchData() {
      this.fetchFollowersOrFollowing(this.followersOrFollowingUrl)
        .then(({ data }) => {
          this.users = data;
        });
    },
  },
};
</script>

<template>
  <v-dialog
    v-model="isDialogVisible"
    width="800"
    persistent
  >
    <v-card>
      <v-card-title>
        Title
      </v-card-title>

      <v-card-text id="scroll-target" class="overflow-y-auto contributors-dialog__card-text">
        <v-container grid-list-xs>
          <v-row>
            <v-col v-for="user in users" :key="user.node_id" cols="4" lg="4" md="4" sm="6">
              <v-row no-gutters dense>
                <v-col cols="2">
                  <v-avatar size="40">
                    <img
                      :src="user.avatar_url"
                      :alt="user.login"
                    >
                  </v-avatar>
                </v-col>

                <v-col class="pl-4 pt-2">
                  <strong v-text="user.login" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
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
      max-height: 600px
    }
  }
</style>
