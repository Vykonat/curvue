<template lang="pug">
    cur-form( title="Forgot Password", button-text="Request password reset" @submit="submitForgotRequest" )
        template( v-slot:fields )
            grid-row
                grid-item
                    cur-input(
                        name="username",
                        id="username",
                        placeholder="Enter your email",
                        type="email",
                        validation="required|max:191|email",
                        v-model="forgotPasswordForm.username",
                        required
                    )
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RegisterForm extends Vue {
    forgotPasswordForm = {};

    async submitForgotRequest() {
        try {
            await this.$auth.forgotPassword(this.forgotPasswordForm);
            alert('an email has been sent with instructions to reset your account');
            this.$router.push({ name: 'auth.reset' });
        } catch( e ) {
            console.log(e);
        }
    }
}
</script>

