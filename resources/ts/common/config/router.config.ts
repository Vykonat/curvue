import Vue    from 'vue';
import Router from 'vue-router';

import { AppRoutes } from '../../sectors/app/_views/routes';
import { AuthRoutes } from '../../sectors/auth/_views/routes';
import { nextTick } from 'q';

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

router.beforeEach((_to, _from, _next) => {
    if( _to.matched.some(record => record.meta.requiresAuth) ) {
        // User must be logged in to view
        if( localStorage.getItem('apollo-token') === null ) {
            _next({ name: 'auth.login' });
            alert('You must be logged in to view this page');
        }

        _next();
    } else if( _to.matched.some(record => record.meta.requiresGuest) ) {
        // User must not be logged in to view
        if( localStorage.getItem('apollo-token') !== null ) {
            _next({ name: 'app.home' });
            alert('You must not be logged in to view this page');
        }

        _next();
    } else {
        // No guards in place
        _next();
    }
})
