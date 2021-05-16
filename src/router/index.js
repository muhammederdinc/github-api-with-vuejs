import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '../modules/search';
import User from '../modules/user';
import Home from '../modules/home';
import Contact from '../modules/contact';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
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
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
