import { RouteConfig } from 'vue-router/types/router';
import { lazyLoadRoute } from "../../../common/utils/lazyLoadRoute.util"
import { requiresAdminMeta } from "../../../common/utils/meta.util"
import { i18n } from "../../../common/config/i18n.config";

export const UserRoutes: RouteConfig[] = [
    {
        path: '/admin/users',
        name: 'admin.users',
        component: () => lazyLoadRoute(
            import(/* webpackChunkName: "Admin_Users_Page" */ "./AdminUsersView/AdminUsersView.vue")
        ),
        meta: {
            ...requiresAdminMeta,
            breadcrumbs: [
                {
                    label: i18n.t('navigation.home'),
                    target: { name: 'app.home' }
                },
                {
                    label: i18n.t('navigation.admin'),
                    target: { name: 'app.home' }
                },
                {
                    label: i18n.t('navigation.users'),
                    target: { name: 'admin.users' },
                },
            ]
        }
    }
]