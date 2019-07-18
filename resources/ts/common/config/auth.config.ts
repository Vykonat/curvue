import bearer from '@websanova/vue-auth/drivers/auth/bearer';
import axios from '@websanova/vue-auth/drivers/http/axios.1.x';
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x';
import { AUTH_TOKEN } from './app.config';

export const authConfig = {
  auth: bearer,
  http: axios,
  router,
  parseUserData: user => user,
  tokenDefaultName: AUTH_TOKEN,
  tokenStore: ['localStorage'],
  rolesVar: 'role_id',
  registerData: { url: 'auth/register', method: 'POST', redirect: '/login' },
  loginData: {
    url: 'auth/login',
    method: 'POST',
    redirect: '',
    fetchUser: true
  },
  logoutData: {
    url: 'auth/logout',
    method: 'POST',
    redirect: '/',
    makeRequest: true
  },
  fetchData: { url: 'auth/user', method: 'GET', enabled: true },
  refreshData: {
    url: 'auth/refresh',
    method: 'POST',
    enabled: true,
    interval: 30
  }
};
