import { RouteConfig } from 'vue-router/types/router';
import { lazyLoadRoute } from "../../../common/utils/lazyLoadRoute.util"

export const AppRoutes: RouteConfig[] = [
    {
        path: '/',
        name: 'app.home',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Home_Page" */ "./HomeView/HomeView.vue")
        ),
        meta: {
            auth: true,
        }
    },

    {
        path: '*',
        name: 'app.404',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Not_Found_Page" */ "./NotFoundView/NotFoundView.vue")
        )
    }
]