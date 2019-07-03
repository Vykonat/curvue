<template lang="pug">
    cur-form( title="Register", button-text="register", @submit="register" )
        template( v-slot:fields )
            grid-row
                grid-item
                    cur-input(
                        name="name",
                        id="name",
                        placeholder="Enter your name",
                        validation="required|min:3|max:191",
                        v-model="registerForm.name",
                        required
                    )

            grid-row
                grid-item
                    cur-input(
                        name="email",
                        id="email",
                        placeholder="Enter your email",
                        type="email",
                        validation="required|max:191|email",
                        v-model="registerForm.email",
                        required
                    )

            grid-row
                grid-item
                    cur-input(
                        name="password",
                        id="password",
                        placeholder="Enter your password",
                        type="password",
                        validation="required|min:8|confirmed",
                        v-model="registerForm.password",
                        required
                    )

            grid-row
                grid-item
                    cur-input(
                        name="password_confirmation",
                        id="password_confirmation",
                        placeholder="Confirm your password",
                        type="password",
                        validation="required",
                        v-model="registerForm.password_confirmation",
                        required
                    )
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RegisterForm extends Vue {
    registerForm = {};

    async register() {
        try {
            await this.$auth.register(this.registerForm);
            alert('You have been registered and can now log in');
            this.$router.push({ name: 'auth.login' });
        } catch( e ) {
            console.log(e);
        }
    }
}
</script>
