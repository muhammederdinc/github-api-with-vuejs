import Vue from 'vue';
import VueRouter from 'vue-router';
import SearchResults from '../modules/searchResults';

Vue.use(VueRouter);

const routes = [
  {
    path: '/searchResults',
    name: 'SearchResults',
    component: SearchResults,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
