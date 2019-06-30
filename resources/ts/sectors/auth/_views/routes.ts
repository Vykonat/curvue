import { RouteConfig } from 'vue-router/types/router';
import { lazyLoadRoute } from "../../../common/utils/lazyLoadRoute.util"

export const AuthRoutes: RouteConfig[] = [
    {
        path: '/login',
        name: 'auth.login',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Login_Page" */ "./LoginView/LoginView.vue")
        ),
    },

    {
        path: '/register',
        name: 'auth.register',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Register_Page" */ "./RegisterView/RegisterView.vue")
        ),
    },

    {
        path: '/forgot-password',
        name: 'auth.forgot',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Forgot_Password_Page" */ "./ForgotPasswordView/ForgotPasswordView.vue")
        ),
    },

    {
        path: '/reset-password/:token',
        name: 'auth.reset',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Forgot_Password_Page" */ "./ResetPasswordView/ResetPasswordView.vue")
        ),
    },
]