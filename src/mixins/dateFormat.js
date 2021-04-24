export default {
  name: 'dateFormat',
  methods: {
    getFormattedDate(date, dateOptions = null) {
      const event = new Date(date);
      let options = null;

      if (dateOptions) options = dateOptions;
      else options = { year: 'numeric', month: 'numeric', day: 'numeric' };

      return event.toLocaleString('en-GB', options);
    },
  },
};
