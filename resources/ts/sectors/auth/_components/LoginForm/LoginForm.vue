<template lang="pug">
    cur-form( :title="$t('auth.login')", :button-text="$t('auth.login')", @submit="login" )
        template( v-slot:fields )
            grid-row
                grid-item
                    cur-input(
                        :name="$t('users.email')",
                        :placeholder="$t('users.email_placeholder')",
                        id="email",
                        type="email",
                        validation="required|max:191|email",
                        v-model="loginForm.email",
                        required
                    )

            grid-row
                grid-item
                    cur-input(
                        :name="$t('users.password')",
                        :placeholder="$t('users.password_placeholder')",
                        id="password",
                        type="password",
                        validation="required|min:8",
                        v-model="loginForm.password",
                        required
                    )

            grid-row
                grid-item
                    cur-checkbox(
                        :label="$t('auth.remember')",
                        v-model='loginForm.rememberMe',
                        name="keep_connected",
                        id="keep_connected",
                    )
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginForm extends Vue {
    loginForm = {
        rememberMe: false,
    };

    async doLogin() {
        await this.$auth.login({
            data: this.loginForm,
            rememberMe: this.loginForm.rememberMe,
            success(response) {
                const { status } = response;

                if (status === 401) {
                    this.authError = true;
                    alert(this.$t('auth.login_fail'));
                    return;
                }
            },
        });
    }

    async login() {
        try {
            await this.doLogin();
            alert(this.$t('auth.login_success'))
            this.$router.push({ name: 'app.home' })
        } catch {
            alert(this.$t('errors.generic_error'));
        }
    }
}
</script>
