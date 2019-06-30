import { RouteConfig } from 'vue-router/types/router';

export const AppRoutes: RouteConfig[] = [
    {
        path: '/',
        name: 'app.home',
        component: () => import(/* webpackChunkName: "Home_Page" */ "./HomeView/HomeView.vue")
    }
]