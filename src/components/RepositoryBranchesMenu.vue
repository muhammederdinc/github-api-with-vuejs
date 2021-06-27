<script>
import { mapActions } from 'vuex';

export default {
  name: 'RepositoryBranchesMenu',
  props: {
    defaultBranch: {
      type: String,
      required: false,
      default: 'Master',
    },
    endpoint: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      branches: [],
      fav: true,
      menu: false,
      message: false,
      hints: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions('app', ['fetchRepositoryBranches']),
    fetchData() {
      this.fetchRepositoryBranches(this.endpoint)
        .then(({ data }) => {
          this.branches = data;
        });
    },
  },
};
</script>

<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="indigo"
        dark small
        depressed dense
        v-bind="attrs"
        v-on="on"
      >
        <v-icon class="mr-1" small>
          mdi-source-branch
        </v-icon>

        <span class="text-lowercase">
          {{ defaultBranch }}
        </span>

        <v-icon class="ml-1" small>
          mdi-menu-down
        </v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon class="mr-1" small>
                mdi-source-branch
              </v-icon>

              Branches
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list
        id="scroll-target"
        class="repository-branches-menu__list overflow-y-auto"
      >
        <v-list-item
          v-for="(branch) in branches"
          :key="branch.name"
        >
          <v-list-item-content>
            <v-list-item-title v-text="branch.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<style lang="scss" scoped>
  .repository-branches-menu {
    &__list {
      max-height: 400px;
    }
  }
</style>
