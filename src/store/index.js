import Vue from 'vue';
import Vuex from 'vuex';
import search from '../modules/search/store';
import user from '../modules/user/store';

Vue.use(Vuex);

export const storeOptions = {
  modules: {
    search,
    user,
  },
};

export default new Vuex.Store(storeOptions);
