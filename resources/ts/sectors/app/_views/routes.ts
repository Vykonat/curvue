import { RouteConfig } from 'vue-router/types/router';
import { lazyLoadRoute } from '../../../common/utils/lazyLoadRoute.util';
import { i18n } from '../../../common/config/i18n.config';

export const AppRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'app.home',
    component: () =>
      lazyLoadRoute(
        import(/* webpackChunkName: "Home_Page" */ './HomeView/HomeView.vue')
      )
  },

  {
    path: '*',
    name: 'app.404',
    component: () =>
      lazyLoadRoute(
        import(
          /* webpackChunkName: "Not_Found_Page" */ './NotFoundView/NotFoundView.vue'
        )
      ),
    meta: {
      breadcrumbs: [
        {
          label: i18n.t('navigation.home'),
          target: { name: 'app.home' }
        },
        {
          label: i18n.t('navigation.404'),
          target: '/'
        }
      ]
    }
  }
];
