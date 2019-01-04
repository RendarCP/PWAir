import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import MainPage from '../views/MainPage.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import NewsPage from '../views/NewsPage.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

export const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/login',
        },
        {
            path:'/login',
            component: LoginPage,
        },
        {
            path:'/main',
            component: MainPage,
        },
        {
            path:'/news',
            component: NewsPage,
        }
    ],
})