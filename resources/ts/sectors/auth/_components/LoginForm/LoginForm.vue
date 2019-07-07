<template lang="pug">
    cur-form( title="Login", button-text="Login", @submit="login" )
        template( v-slot:fields )
            grid-row
                grid-item
                    cur-input(
                        name="email",
                        id="email",
                        placeholder="Enter your email",
                        type="email",
                        validation="required|max:191|email",
                        v-model="loginForm.email",
                        required
                    )

            grid-row
                grid-item
                    cur-input(
                        name="password",
                        id="password",
                        placeholder="Enter your password",
                        type="password",
                        validation="required|min:8",
                        v-model="loginForm.password",
                        required
                    )
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginForm extends Vue {
    loginForm = {
        rememberMe: true,
    };

    async doLogin() {
        await this.$auth.login({
            data: this.loginForm,
            rememberMe: this.loginForm.rememberMe,
            success(response) {
                const { status } = response;

                if (status === 401) {
                    this.authError = true;
                    alert('auth.failed');
                    return;
                }
            },
        });
    }

    async login() {
        try {
            await this.doLogin();
            alert('auth.success')
            this.$router.push({ name: 'app.home' })
        } catch {
            alert('errors.generic_error');
        }
    }
}
</script>
