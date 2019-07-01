<template lang="pug">
    form( @submit.prevent="register" )
        legend Register
        label( for="name" ) Enter your name
        input( type="text", v-model="registerForm.name", name="name" )
        br
        label( for="email" ) Enter your email
        input( type="email", v-model="registerForm.email", name="email" )
        br
        label( for="password" ) Enter your password
        input( type="password", v-model="registerForm.password", name="password" )
        br
        label( for="password_confirmation" ) Confirm your password
        input( type="password", v-model="registerForm.password_confirmation", name="password_confirmation" )
        br
        button( type="submit" ) register
        pre {{ registerForm }}
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RegisterForm extends Vue {
    registerForm = {};

    async register() {
        try {
            this.$auth.register(this.registerForm);
            alert('You have been registered and can now log in');
            this.$router.push({ name: 'auth.login' });
        } catch( e ) {
            console.log(e);
        }
    }
}
</script>
