import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '../modules/search';
import User from '../modules/user';

Vue.use(VueRouter);

const routes = [
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
