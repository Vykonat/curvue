import { RouteConfig } from 'vue-router/types/router';
import { lazyLoadRoute } from '../../../common/utils/lazyLoadRoute.util';
import { requiresAdminMeta } from '../../../common/utils/meta.util';
import { i18n } from '../../../common/config/i18n.config';

export const BlogPostRoutes: RouteConfig[] = [
  {
    path: '/post/:slug',
    name: 'blog.show',
    component: () =>
      lazyLoadRoute(
        import(
          /* webpackChunkName: "Blog_Post_Page" */ './BlogPostView/BlogPostView.vue'
        )
      ),
    meta: {
      breadcrumbs: [
        {
          label: i18n.t('navigation.home'),
          target: { name: 'app.home' }
        },
        {
          label: i18n.t('navigation.blogPosts'),
          target: { name: 'blog.index' }
        },
        {
          label: i18n.t('navigation.blogPost'),
          target: { name: 'blog.show' }
        }
      ]
    }
  },

  {
    path: '/blog',
    name: 'blog.index',
    component: () =>
      lazyLoadRoute(
        import(
          /* webpackChunkName: "Blog_Posts_Index_Page" */ './BlogPostsIndexView/BlogPostsIndexView.vue'
        )
      ),
    meta: {
      breadcrumbs: [
        {
          label: i18n.t('navigation.home'),
          target: { name: 'app.home' }
        },
        {
          label: i18n.t('navigation.blogPosts'),
          target: { name: 'blog.index' }
        }
      ]
    }
  },

  {
    path: '/admin/blog',
    name: 'admin.blogPosts',
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
