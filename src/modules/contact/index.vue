<script>
export default {
  name: 'Contact',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      { id: 'TR', name: 'Turkey' },
      { id: 'US', name: 'United States of America' },
      { id: 'GB', name: 'United Kingdom' },
      { id: 'DE', name: 'Germany' },
      { id: 'SE', name: 'Sweden' },
      { id: 'KE', name: 'Kenya' },
      { id: 'BR', name: 'Brazil' },
      { id: 'ZW', name: 'Zimbabwe' },
    ],
    checkbox: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<template>
  <v-container grid-list-xs>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        :label="$t('main.name')"
        required
      />

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      />

      <v-autocomplete
        v-model="select"
        :items="items"
        :rules="[v => !!v || $t('warning.required')]"
        :label="$t('main.country')"
        required
        item-text="name"
      />

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || $t('warning.required')]"
        :label="$t('warning.do_you_agree')"
        required
      />

      <v-btn
        v-text="$t('main.send')"
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      />

      <v-btn
        v-text="$t('main.reset_form')"
        color="error"
        class="mr-4"
        @click="reset"
      />

      <v-btn
        v-text="$t('main.reset_warning')"
        color="warning"
        @click="resetValidation"
      />
    </v-form>
  </v-container>
</template>
