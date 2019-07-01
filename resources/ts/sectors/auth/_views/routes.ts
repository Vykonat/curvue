import { RouteConfig } from 'vue-router/types/router';
import { lazyLoadRoute } from "../../../common/utils/lazyLoadRoute.util"

export const AuthRoutes: RouteConfig[] = [
    {
        path: '/login',
        name: 'auth.login',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Login_Page" */ "./LoginView/LoginView.vue")
        ),
        meta: {
            requiresGuest: true,
        }
    },

    {
        path: '/register',
        name: 'auth.register',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Register_Page" */ "./RegisterView/RegisterView.vue")
        ),
        meta: {
            requiresGuest: true,
        }
    },

    {
        path: '/forgot-password',
        name: 'auth.forgot',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Forgot_Password_Page" */ "./ForgotPasswordView/ForgotPasswordView.vue")
        ),
        meta: {
            requiresGuest: true,
        }
    },

    {
        path: '/reset-password/:token',
        name: 'auth.reset',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Forgot_Password_Page" */ "./ResetPasswordView/ResetPasswordView.vue")
        ),
        meta: {
            requiresGuest: true,
        }
    },
]