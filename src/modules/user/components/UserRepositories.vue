<script>
import ContributorsDialog from './ContributorsDialog';

export default {
  name: 'UserRepositories',
  components: {
    ContributorsDialog,
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
    getDescription(item) {
      const { description } = item;
      const isDescriptionLong = description && description.length > 350;

      return isDescriptionLong ? `${description.substring(0, 349)}...` : description;
    },
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
            <v-card outlined>
              <v-card-title>
                <v-row>
                  <v-col cols="9">
                    {{ item.name }}

                    <v-chip v-if="item.fork" x-small outlined>
                      Forked
                    </v-chip>
                  </v-col>

                  <v-col cols="3" class="text-right caption pa-0 ma-0">
                    Created: {{ item.created_at }}

                    <br>

                    <v-chip v-if="item.stargazers_count" x-small class="mr-1" outlined>
                      <v-icon color="primary" x-small left>
                        mdi-star
                      </v-icon>
                      {{ item.stargazers_count }}
                    </v-chip>

                    <v-chip v-if="item.watchers_count" x-small class="mr-1" outlined>
                      <v-icon color="deep-purple accent-4" x-small left>
                        mdi-eye
                      </v-icon>
                      {{ item.watchers_count }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-card-title>

              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    {{ getDescription(item) }}
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions class="caption py-0 my-0">
                <v-chip v-if="item.language" x-small class="ma-1" outlined>
                  <v-icon color="primary" x-small left>
                    mdi-circle
                  </v-icon>
                  {{ item.language }}
                </v-chip>

                <v-chip v-if="item.forks_count" x-small class="ma-1" outlined>
                  <v-icon color="primary" x-small left>
                    mdi-source-fork
                  </v-icon>
                  {{ item.forks_count }}
                </v-chip>

                <v-chip v-if="item.license" x-small class="ma-1" outlined>
                  <v-icon color="primary" x-small left>
                    mdi-anchor
                  </v-icon>
                  {{ item.license.name }}
                </v-chip>

                <v-chip x-small class="ma-1" outlined>
                  <v-icon color="primary" x-small left>
                    mdi-calendar
                  </v-icon>
                  Updated on: {{ item.pushed_at }}
                </v-chip>

                <v-spacer />

                <a
                  v-text="`contributors`"
                  class="text-decoration-none"
                  @click="openContributorsDialog(item.contributors_url)"
                />
              </v-card-actions>
            </v-card>
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
