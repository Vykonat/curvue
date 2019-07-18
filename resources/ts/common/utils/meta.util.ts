import userRoles from '../config/userRoles.config';

export const requiresAdminMeta = {
  auth: {
    roles: userRoles.ADMIN,
    forbiddenRedirect: { name: 'auth.login' }
  }
};

export const requiresGuestMeta = {
  auth: false,
  redirect: { name: 'app.home' }
};

export const requiresAuthMeta = {
  auth: true,
  redirect: { name: 'auth.login' }
};
