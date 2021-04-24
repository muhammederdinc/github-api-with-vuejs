<script>
import ContributorsDialog from './ContributorsDialog';
import UserRepositoryCard from './UserRepositoryCard';

export default {
  name: 'UserRepositories',
  components: {
    ContributorsDialog,
    UserRepositoryCard,
  },
  props: {
    repositories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isContributorsDialogVisible: false,
      contributorsUrl: '',
    };
  },
  methods: {
    openContributorsDialog(url) {
      this.isContributorsDialogVisible = true;
      this.contributorsUrl = url;
    },
  },
};
</script>

<template>
  <div>
    <v-data-iterator
      :items="repositories"
    >
      <template v-slot:default="{ items }">
        <v-row>
          <v-col v-for="item in items" :key="item.id" cols="12">
            <user-repository-card
              :item="item"
              @showContributors="openContributorsDialog"
            />
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>

    <contributors-dialog
      v-if="isContributorsDialogVisible"
      :contributors-url="contributorsUrl"
      @close="isContributorsDialogVisible = false"
    />
  </div>
</template>
