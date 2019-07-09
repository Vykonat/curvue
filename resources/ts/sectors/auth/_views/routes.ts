import { RouteConfig } from 'vue-router/types/router';
import { lazyLoadRoute } from "../../../common/utils/lazyLoadRoute.util";
import { requiresGuestMeta } from "../../../common/utils/meta.util";
import { i18n } from "../../../common/config/i18n.config";

export const AuthRoutes: RouteConfig[] = [
    {
        path: '/login',
        name: 'auth.login',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Login_Page" */ "./LoginView/LoginView.vue")
        ),
        meta: {
            ...requiresGuestMeta,
            breadcrumbs: [
                {
                    label: i18n.t('navigation.home'),
                    target: { name: 'app.home' }
                },
                {
                    label: i18n.t('auth.login'),
                    target: { name: 'auth.login' },
                },
            ]
        }
    },

    {
        path: '/register',
        name: 'auth.register',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Register_Page" */ "./RegisterView/RegisterView.vue")
        ),
        meta: {
            ...requiresGuestMeta,
            breadcrumbs: [
                {
                    label: i18n.t('navigation.home'),
                    target: { name: 'app.home' }
                },
                {
                    label: i18n.t('auth.register'),
                    target: { name: 'auth.register' },
                },
            ]
        }
    },

    {
        path: '/forgot-password',
        name: 'auth.forgot',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Forgot_Password_Page" */ "./ForgotPasswordView/ForgotPasswordView.vue")
        ),
        meta: {
            ...requiresGuestMeta,
            breadcrumbs: [
                {
                    label: i18n.t('navigation.home'),
                    target: { name: 'app.home' }
                },
                {
                    label: i18n.t('auth.forgot'),
                    target: { name: 'auth.forgot' },
                },
            ]
        }
    },

    {
        path: '/password/reset/:token',
        name: 'auth.reset',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Reset_Password_Page" */ "./ResetPasswordView/ResetPasswordView.vue")
        ),
        meta: {
            ...requiresGuestMeta,
            breadcrumbs: [
                {
                    label: i18n.t('navigation.home'),
                    target: { name: 'app.home' }
                },
                {
                    label: i18n.t('auth.forgot'),
                    target: { name: 'auth.forgot' },
                },
                {
                    label: i18n.t('auth.reset'),
                    target: { name: 'auth.reset' },
                },
            ]
        }
    },
]