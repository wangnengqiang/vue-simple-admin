import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Layout =() => import("../views/layout/layout");
const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
    },
];
export default new VueRouter({
    routes,
    mode:"history",
})
