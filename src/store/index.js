import Vue from 'vue';
import Vuex from 'vuex';
// import app from '../modules/app/store';
import search from '../modules/search/store';

Vue.use(Vuex);

export const storeOptions = {
  modules: {
    // app,
    search,
  },
};

export default new Vuex.Store(storeOptions);
