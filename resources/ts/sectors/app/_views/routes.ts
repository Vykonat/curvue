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
    path: '/cookie-consent',
    name: 'app.cookies',
    component: () =>
      lazyLoadRoute(
        import(
          /* webpackChunkName: "Cookie_Consent_Page" */ './CookieConsentView/CookieConsentView.vue'
        )
      ),
    meta: {
      breadcrumbs: [
        {
          label: i18n.t('navigation.home'),
          target: { name: 'app.home' }
        },
        {
          label: i18n.t('navigation.cookies'),
          target: { name: 'app.cookies' }
        }
      ]
    }
  },

  {
    path: '/privacy-policy',
    name: 'app.privacy',
    component: () =>
      lazyLoadRoute(
        import(
          /* webpackChunkName: "Privacy_Policy_Page" */ './PrivacyPolicyView/PrivacyPolicyView.vue'
        )
      ),
    meta: {
      breadcrumbs: [
        {
          label: i18n.t('navigation.home'),
          target: { name: 'app.home' }
        },
        {
          label: i18n.t('navigation.privacy'),
          target: { name: 'app.privacy' }
        }
      ]
    }
  },

  {
    path: '/terms-of-use',
    name: 'app.terms',
    component: () =>
      lazyLoadRoute(
        import(
          /* webpackChunkName: "Privacy_Policy_Page" */ './TermsOfUseView/TermsOfUseView.vue'
        )
      ),
    meta: {
      breadcrumbs: [
        {
          label: i18n.t('navigation.home'),
          target: { name: 'app.home' }
        },
        {
          label: i18n.t('navigation.terms'),
          target: { name: 'app.terms' }
        }
      ]
    }
  },

  {
    path: '*',
    name: 'app.404',
    component: () =>
      lazyLoadRoute(
        import(
          /* webpackChunkName: "Not_Found_Page" */ './NotFoundView/NotFoundView.vue'
        )
      )
  }
];
