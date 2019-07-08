import userRoles from "../config/userRoles.config";

export const requiresAdminMeta = {
    // User must be admin to view page
    auth: {
        roles: userRoles.ADMIN,
        forbiddenRedirect: { name: 'auth.login' }
    }
}

export const requiresGuestMeta = {
    // User must not be logged in to visit route
    auth: false,
    redirect: { name: 'app.home' },
}

export const requiresAuthMeta = {
    // User must be logged in to view page
    auth: true,
    redirect: { name: 'auth.login' },
}