<template lang="pug">
    form( @submit.prevent="submitForgotRequest" )
        legend Forgot Password
        label( for="name" ) Enter your email
        input( type="email", v-model="forgotPasswordForm.email", name="email" )
        button( type="submit" ) submit
        pre {{ forgotPasswordForm }}
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RegisterForm extends Vue {
    forgotPasswordForm = {};

    async submitForgotRequest() {
        try {
            this.$auth.forgotPassword(this.forgotPasswordForm);
            alert('an email has been sent with instructions to reset your account');
            this.$router.push({ name: 'auth.reset' });
        } catch( e ) {
            console.log(e);
        }
    }
}
</script>

