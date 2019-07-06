import Register from "../../sectors/auth/_gql/mutations/registerMutation.gql";
import Login from "../../sectors/auth/_gql/mutations/loginMutation.gql";
import Logout from "../../sectors/auth/_gql/mutations/logoutMutation.gql";
import Auth from "../../sectors/auth/_gql/queries/authQuery.gql";
import ForgotPassword from "../../sectors/auth/_gql/mutations/forgotPasswordMutation.gql";
import ResetPassword from "../../sectors/auth/_gql/mutations/resetPasswordMutation.gql";

import { apolloClient, onLogin, onLogout } from '../config/apollo.config';
import { app } from "../../app";
import _Vue from "vue";

const Plugin = {
    install (Vue: typeof _Vue, options?: any) {

        //Add $auth api methods
        Vue.prototype.$auth = {

            register(data: IRegisterInput) {
                return apolloClient.mutate({
                    mutation: Register,
                    variables: {
                        data: data,
                    },
                })
            },

            forgotPassword(data: any) {
                return apolloClient.mutate({
                    mutation: ForgotPassword,
                    variables: {
                        data: data,
                    },
                })
            },

            resetPassword(data: any) {
                return apolloClient.mutate({
                    mutation: ResetPassword,
                    variables: {
                        data: data,
                    },
                })
            },

            //Attempts to log the user in with supplied credentials
            async login(data: ILoginInput) {
                const response = await apolloClient.mutate({
                    mutation: Login,
                    variables: {
                        data: data,
                    }
                });
                const access_token = response.data.login.access_token;
                const user = response.data.login.user;
                app.$data.user = user;
                onLogin(apolloClient, access_token);
            },

            //Logs the user out and clears local tokens
            async logout() {
                await apolloClient.mutate({
                    mutation: Logout,
                });
                app.$data.user = null;
                onLogout(apolloClient);
            },

            user() {
                return app.$data.user;
            },

            check() {
                return app.$data.user !== null;
            }
        }
    }
}

export default Plugin