import RegisterMutation from "../../sectors/auth/_gql/mutations/registerMutation.gql";
import LoginMutation from "../../sectors/auth/_gql/mutations/loginMutation.gql";
import LogoutMutation from "../../sectors/auth/_gql/mutations/logoutMutation.gql";
// import ForgotPasswordMutation from "../../sectors/auth/_gql/mutations/ForgotPasswordMutation.gql";
// import ResetForgottenPassword from "../../sectors/auth/_gql/mutations/ResetForgottenPassword.gql";
import { apolloClient } from '../config/apollo.config';
import _Vue from "vue";

const Plugin = {
    install (Vue: typeof _Vue, options?: any) {

        //Add $auth api methods
        Vue.prototype.$auth = {

            register(data: IRegisterInput) {
                return apolloClient.mutate({
                    mutation: RegisterMutation,
                    variables: {
                        data: data
                    }
                })
            },

            // forgotPassword(data: any) {
            //     return apolloClient.mutate({
            //         mutation: ForgotPasswordMutation,
            //         variables: {
            //             data: data
            //         }
            //     })
            // },

            // resetPassword(data: any) {
            //     return apolloClient.mutate({
            //         mutation: ResetForgottenPassword,
            //         variables: {
            //             data: data
            //         }
            //     })
            // },

            //Attempts to log the user in with supplied credentials
            login(data: ILoginInput) {
                return apolloClient.mutate({
                    mutation: LoginMutation,
                    variables: {
                        data: data
                    }
                })
            },

            //Logs the user out and clears local tokens
            logout() {
                return apolloClient.mutate({
                    mutation: LogoutMutation,
                })
            },
        }
    }
}

export default Plugin