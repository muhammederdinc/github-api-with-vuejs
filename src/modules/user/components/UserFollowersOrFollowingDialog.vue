<script>
import { mapActions } from 'vuex';

export default {
  name: 'UserFollowersOrFollowingDialog',
  props: {
    followersOrFollowingParams: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isDialogVisible: false,
      users: [],
      pagination: {
        page: 1,
        length: 1,
      },
    };
  },
  created() {
    if (this.followersOrFollowingParams.total) {
      this.pagination = {
        page: 1,
        length: Math.ceil(this.followersOrFollowingParams.total / 30),
      };
    }
  },
  mounted() {
    this.isDialogVisible = true;
    this.fetchData();
  },
  methods: {
    ...mapActions('user', ['fetchFollowersOrFollowing']),
    fetchData() {
      const params = {
        page: this.pagination.page,
        ...this.followersOrFollowingParams,
      };

      this.fetchFollowersOrFollowing(params)
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
      <v-card-title class="text-capitalize">
        {{ followersOrFollowingParams.type }}
      </v-card-title>

      <v-card-text>
        <v-container grid-list-xs>
          <v-row>
            <v-col
              v-for="user in users" :key="user.node_id"
              cols="4" lg="4" md="4" sm="6"
            >
              <v-row no-gutters dense>
                <v-col cols="4">
                  <v-avatar size="40">
                    <img
                      :src="user.avatar_url"
                      :alt="user.login"
                    >
                  </v-avatar>
                </v-col>

                <v-col class="pt-2">
                  <strong v-text="user.login" />
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" class="mb-0 pb-0">
              <v-pagination
                v-model="pagination.page"
                :length="pagination.length"
                total-visible="13"
                @input="fetchData"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />

        <v-btn
          v-text="$t('main.close')"
          color="error"
          text small
          @click="$emit('close')"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
