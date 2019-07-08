import { RouteConfig } from 'vue-router/types/router';
import { lazyLoadRoute } from "../../../common/utils/lazyLoadRoute.util"
import { requiresAdminMeta } from "../../../common/utils/meta.util"

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
                    label: 'Home',
                    target: '/'
                },
                {
                    label: 'Users',
                    target: '/admin/users',
                },
            ]
        }
    }
]