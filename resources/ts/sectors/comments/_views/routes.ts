import { RouteConfig } from 'vue-router/types/router';
import { lazyLoadRoute } from '../../../common/utils/lazyLoadRoute.util';
import { requiresAdminMeta } from '../../../common/utils/meta.util';
import { i18n } from '../../../common/config/i18n.config';

export const CommentRoutes: RouteConfig[] = [
  {
    path: '/admin/comments',
    name: 'admin.comments',
    component: () =>
      lazyLoadRoute(
        import(
          /* webpackChunkName: "Admin_Comments_Page" */ './AdminCommentsView/AdminCommentsView.vue'
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
          label: i18n.t('navigation.comments'),
          target: { name: 'admin.comments' }
        }
      ]
    }
  },

  {
    path: '/discussion/:id',
    name: 'comments.discussion',
    component: () =>
      lazyLoadRoute(
        import(
          /* webpackChunkName: "Discussion_Page" */ './DiscussionView/DiscussionView.vue'
        )
      ),
    meta: {
      breadcrumbs: [
        {
          label: i18n.t('navigation.home'),
          target: { name: 'app.home' }
        },
        {
          label: i18n.t('navigation.comments'),
          target: { name: 'comments.discussion' }
        }
      ]
    }
  }
];
