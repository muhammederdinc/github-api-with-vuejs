import axios from 'axios';
import Vue from 'vue';
import App from './modules/app';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './i18n';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://api.github.com/';

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
