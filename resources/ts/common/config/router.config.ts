import Vue    from 'vue';
import Router from 'vue-router';

import { AppRoutes } from '../../sectors/app/_views/routes';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        ...AppRoutes //! Must be kept at bottom for 404 UX
    ],
  
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash };
        }
        return savedPosition || { x: 0, y: 0 };
    },
});
