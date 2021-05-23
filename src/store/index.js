import Vue from 'vue';
import Vuex from 'vuex';
import search from '../modules/search/store';
import user from '../modules/user/store';
import app from '../modules/app/store';

Vue.use(Vuex);

export const storeOptions = {
  modules: {
    search,
    user,
    app,
  },
};

export default new Vuex.Store(storeOptions);
