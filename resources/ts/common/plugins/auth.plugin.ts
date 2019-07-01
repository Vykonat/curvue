import Register from "../../sectors/auth/_gql/mutations/registerMutation.gql";
import Login from "../../sectors/auth/_gql/mutations/loginMutation.gql";
import Logout from "../../sectors/auth/_gql/mutations/logoutMutation.gql";
import ForgotPassword from "../../sectors/auth/_gql/mutations/forgotPasswordMutation.gql";
import ResetPassword from "../../sectors/auth/_gql/mutations/resetPasswordMutation.gql";

import { apolloClient, onLogin, onLogout } from '../config/apollo.config';
import _Vue from "vue";

const Plugin = {
    install (Vue: typeof _Vue, options?: any) {

        //Add $auth api methods
        Vue.prototype.$auth = {

            register(data: IRegisterInput) {
                return apolloClient.mutate({
                    mutation: Register,
                    variables: {
                        data: data
                    }
                })
            },

            forgotPassword(data: any) {
                return apolloClient.mutate({
                    mutation: ForgotPassword,
                    variables: {
                        data: data
                    }
                })
            },

            resetPassword(data: any) {
                return apolloClient.mutate({
                    mutation: ResetPassword,
                    variables: {
                        data: data
                    }
                })
            },

            //Attempts to log the user in with supplied credentials
            login(data: ILoginInput) {
                return apolloClient.mutate({
                    mutation: Login,
                    variables: {
                        data: data
                    }
                })
                .then( data => {
                    const access_token = data.data.login.access_token;
                    onLogin(apolloClient, access_token);
                })
            },

            //Logs the user out and clears local tokens
            logout() {
                return apolloClient.mutate({
                    mutation: Logout,
                })
                .then( () => {
                    onLogout(apolloClient)
                })
            },

            check() {
                return localStorage.getItem('apollo-token');
            }
        }
    }
}

export default Plugin