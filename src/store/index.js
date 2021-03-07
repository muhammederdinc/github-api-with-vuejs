import Vue from 'vue';
import Vuex from 'vuex';
import app from '../modules/app/store';

Vue.use(Vuex);

export const storeOptions = {
  modules: {
    app,
  },
};

export default new Vuex.Store(storeOptions);
