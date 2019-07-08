import { RouteConfig } from 'vue-router/types/router';
import { lazyLoadRoute } from "../../../common/utils/lazyLoadRoute.util";
import { requiresGuestMeta } from "../../../common/utils/meta.util"

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
                    label: 'Home',
                    target: '/'
                },
                {
                    label: 'login',
                    target: '/login',
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
                    label: 'Home',
                    target: '/'
                },
                {
                    label: 'Register',
                    target: '/register',
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
                    label: 'Home',
                    target: '/'
                },
                {
                    label: 'Forgot Password',
                    target: '/forgot-password',
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
                    label: 'Home',
                    target: '/'
                },
                {
                    label: 'Forgot Password',
                    target: '/forgot-password',
                },
                {
                    label: 'Reset Password',
                    target: '/password/reset',
                },
            ]
        }
    },
]