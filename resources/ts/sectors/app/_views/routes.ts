import { RouteConfig } from 'vue-router/types/router';

export const AppRoutes: RouteConfig[] = [
    {
        path: '/',
        name: 'app.home',
        component: () => import(/* webpackChunkName: "Home_Page" */ "./HomeView/HomeView.vue")
    },

    {
        path: '*',
        name: 'app.404',
        component: () => import(/* webpackChunkName: "Not_Found_Page" */ "./NotFoundView/NotFoundView.vue")
    }
]