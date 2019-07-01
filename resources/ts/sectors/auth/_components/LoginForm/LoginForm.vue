<template lang="pug">
    form( @submit.prevent="login" )
        legend Login
        label( for="username" ) Enter your username
        input( type="text", v-model="loginForm.username", name="username" )
        br
        label( for="password" ) Enter your password
        input( type="password", v-model="loginForm.password", name="password" )
        br
        button( type="submit" ) login
        pre {{ loginForm }}
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginForm extends Vue {
    loginForm = {};

    async login() {
        try {
            this.$auth.login(this.loginForm);
            alert('You have logged in');
            this.$router.push({ name: 'app.home' });
        } catch( e ) {
            console.log(e);
        }
    }
}
</script>
