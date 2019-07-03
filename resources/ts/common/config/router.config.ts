import Vue    from 'vue';
import Router from 'vue-router';
import { AUTH_TOKEN } from "./app.config";

import { AppRoutes } from '../../sectors/app/_views/routes';
import { AuthRoutes } from '../../sectors/auth/_views/routes';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        ...AuthRoutes,
        ...AppRoutes //! Must be kept at bottom for 404 UX
    ],
  
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash };
        }
        return savedPosition || { x: 0, y: 0 };
    },
});

router.beforeEach((to, _from, next) => {
    if( to.matched.some(record => record.meta.requiresAuth) ) {
        // User must be logged in to view
        if( localStorage.getItem( AUTH_TOKEN ) === null ) {
            console.error('You must be logged in to view this page');
            return next({ name: 'auth.login' });
        }

        return next();
    } else if( to.matched.some(record => record.meta.requiresGuest) ) {
        // User must not be logged in to view
        if( localStorage.getItem( AUTH_TOKEN ) !== null ) {
            console.error('You must not be logged in to view this page');
            return next({ name: 'app.home' });
        }

        return next();
    } else {
        // No guards in place
        return next();
    }
})
