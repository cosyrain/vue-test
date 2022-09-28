import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SayHi from '../components/SayHi';
import Blogs from '../components/BlogList';
import Blog from '../components/BlogBody';
import TwoWayBinding from '../components/TwoWayBinding';
import FormSubmit from '../components/FormSubmit';
import NotFound from '../components/NotFound';
import SayHiFromMixin from '@/components/SayHiFromMixin';
import ShowCounter1 from '@/components/ShowCounter1';
import ShowCounter2 from '@/components/ShowCounter2';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
    {
        path: '/say_hi',
        name: 'sayhi',
        component: SayHi,
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: Blogs,
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
    },
    {
        path: '/two_way_binding',
        name: 'twowaybinding',
        component: TwoWayBinding,
    },
    {
        path: '/form_submit',
        name: 'FormSubmit',
        component: FormSubmit,
    },
    {
        path:'*',
        component:NotFound,
    },
    {
        path:'/say_hi_from_mixin',
        name:'SayHiFromMixin',
        component:SayHiFromMixin
    },
    {
        path:'/show_counter1',
        name:'ShowCounter1',
        component:ShowCounter1
    },
    {
        path:'/show_counter2',
        name:'ShowCounter2',
        component:ShowCounter2
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
