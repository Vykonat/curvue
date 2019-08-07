import { RouteConfig } from 'vue-router/types/router';
import { lazyLoadRoute } from '../../../common/utils/lazyLoadRoute.util';
import { requiresAdminMeta } from '../../../common/utils/meta.util';
import { i18n } from '../../../common/config/i18n.config';

export const BlogPostRoutes: RouteConfig[] = [
  {
    path: '/admin/blog-posts',
    name: 'admin.blogposts',
    component: () =>
      lazyLoadRoute(
        import(
          /* webpackChunkName: "Admin_Blog_Posts_Page" */ './AdminBlogPostsView/AdminBlogPostsView.vue'
        )
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
          label: i18n.t('navigation.blogPosts'),
          target: { name: 'admin.blogPosts' }
        }
      ]
    }
  }
];
