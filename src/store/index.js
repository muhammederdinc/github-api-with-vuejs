import Vue from 'vue';
import Vuex from 'vuex';
import app from '../modules/app/store';
import searchResults from '../modules/searchResults/store';

Vue.use(Vuex);

export const storeOptions = {
  modules: {
    app,
    searchResults,
  },
};

export default new Vuex.Store(storeOptions);
