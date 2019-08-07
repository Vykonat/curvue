import Vue from 'vue';
import Router from 'vue-router';

import { AppRoutes } from '../../sectors/app/_views/routes';
import { AuthRoutes } from '../../sectors/auth/_views/routes';
import { UserRoutes } from '../../sectors/users/_views/routes';
import { BlogPostRoutes } from '../../sectors/blogposts/_views/routes';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    ...UserRoutes,
    ...AuthRoutes,
    ...BlogPostRoutes,
    ...AppRoutes //! Must be kept at bottom for 404 UX
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return savedPosition || { x: 0, y: 0 };
  }
});

Vue.router = router;
