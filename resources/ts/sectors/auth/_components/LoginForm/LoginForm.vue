<template lang="pug">
    cur-form( title="Login", button-text="Login", @submit="login" )
        template( v-slot:fields )
            grid-row
                grid-item
                    cur-input(
                        name="username",
                        id="username",
                        placeholder="Enter your email",
                        type="email",
                        validation="required|max:191|email",
                        v-model="loginForm.username",
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
    loginForm = {};

    async login() {
        try {
            await this.$auth.login(this.loginForm);
            alert('You have logged in');
            this.$router.push({ name: 'app.home' });
        } catch( e ) {
            console.log(e);
        }
    }
}
</script>
