<script>
import dateFormat from '@/mixins/dateFormat';

export default {
  name: 'UserRepositoryCard',
  mixins: [dateFormat],
  props: {
    userRepository: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getDescription({ description = '' }) {
      const isDescriptionLong = description && description.length > 350;

      return isDescriptionLong ? `${description.substring(0, 349)}...` : description;
    },
    showContributors(contributorsUrl) {
      this.$emit('showContributors', contributorsUrl);
    },
  },
};
</script>

<template>
  <v-card outlined>
    <v-card-title>
      <v-row>
        <v-col cols="9">
          {{ userRepository.name }}

          <v-chip v-if="userRepository.fork" x-small outlined>
            Forked
          </v-chip>
        </v-col>

        <v-col cols="3" class="text-right caption pa-0 ma-0">
          Created: {{ getFormattedDate(userRepository.created_at) }}

          <br>

          <v-chip v-if="userRepository.stargazers_count" x-small class="mr-1" outlined>
            <v-icon color="primary" x-small left>
              mdi-star
            </v-icon>
            {{ userRepository.stargazers_count }}
          </v-chip>

          <v-chip v-if="userRepository.watchers_count" x-small class="mr-1" outlined>
            <v-icon color="deep-purple accent-4" x-small left>
              mdi-eye
            </v-icon>
            {{ userRepository.watchers_count }}
          </v-chip>
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col cols="12">
          {{ getDescription(userRepository) }}
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions class="caption py-0 my-0">
      <v-chip v-if="userRepository.language" x-small class="ma-1" outlined>
        <v-icon color="primary" x-small left>
          mdi-circle
        </v-icon>
        {{ userRepository.language }}
      </v-chip>

      <v-chip v-if="userRepository.forks_count" x-small class="ma-1" outlined>
        <v-icon color="primary" x-small left>
          mdi-source-fork
        </v-icon>
        {{ userRepository.forks_count }}
      </v-chip>

      <v-chip v-if="userRepository.license" x-small class="ma-1" outlined>
        <v-icon color="primary" x-small left>
          mdi-anchor
        </v-icon>
        {{ userRepository.license.name }}
      </v-chip>

      <v-chip x-small class="ma-1" outlined>
        <v-icon color="primary" x-small left>
          mdi-calendar
        </v-icon>
        Updated on: {{ userRepository.pushed_at }}
      </v-chip>

      <v-spacer />

      <a
        v-text="`contributors`"
        class="text-decoration-none"
        @click="showContributors(userRepository.contributors_url)"
      />
    </v-card-actions>
  </v-card>
</template>
