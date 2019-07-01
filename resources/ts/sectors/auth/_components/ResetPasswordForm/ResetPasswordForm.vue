<template lang="pug">
    form( @submit.prevent="submitResetRequest" )
        legend Reset Password
        label( for="name" ) Enter your email
        input( type="email", v-model="resetPasswordForm.email", name="email" )
        br
        label( for="token" ) Enter your token
        input( type="text", v-model="resetPasswordForm.token", name="token" )
        br
        label( for="password" ) Enter your password
        input( type="password", v-model="resetPasswordForm.password", name="password" )
        br
        label( for="password_confirmation" ) Confirm your password
        input( type="password", v-model="resetPasswordForm.password_confirmation", name="password_confirmation" )
        br
        button( type="submit" ) Reset
        pre {{ resetPasswordForm }}
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RegisterForm extends Vue {
    resetPasswordForm = {};

    async submitResetRequest() {
        try {
            this.$auth.resetPassword(this.resetPasswordForm);
            alert('Your password has been reset.');
            this.$router.push({ name: 'auth.login' });
        } catch( e ) {
            console.log(e);
        }
    }
}
</script>

