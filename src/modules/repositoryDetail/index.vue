<script>
import { mapActions } from 'vuex';
import RepositoryBranchesMenu from '../../components/RepositoryBranchesMenu';

export default {
  name: 'RepositoryDetail',
  components: {
    RepositoryBranchesMenu,
  },
  data() {
    return {
      repository: null,
    };
  },
  mounted() {
    this.fetchRepositoryDetail();
  },
  methods: {
    ...mapActions('app', ['fetchData']),
    fetchRepositoryDetail() {
      this.fetchData(this.$route.query.endpoint)
        .then(({ data }) => {
          this.repository = data;
        });
    },
  },
};
</script>

<template>
  <div>
    <v-toolbar dense flat outlined>
      <repository-branches-menu
        :default-branch="repository.default_branch"
        :endpoint="repository.url"
      />

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    {{ repository }}
  </div>
</template>
