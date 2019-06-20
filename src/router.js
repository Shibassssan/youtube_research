import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/pages/Home.vue';
import Search from '@/pages/Search.vue';



Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/search',
            component: Search
        }
    ]
});

export default router;