<template lang="pug">
    cur-form( title="Forgot Password", button-text="Request password reset" @submit="submitForgotRequest" )
        template( v-slot:fields )
            grid-row
                grid-item
                    cur-input(
                        name="email",
                        id="email",
                        placeholder="Enter your email",
                        type="email",
                        validation="required|max:191|email",
                        v-model="forgotPasswordForm.email",
                        required
                    )
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RegisterForm extends Vue {
    forgotPasswordForm = {};

    async doSubmit() {
        const response = await this.axios.post('../password/email', this.forgotPasswordForm);
    }

    async submitForgotRequest() {
        try {
            await this.doSubmit();
        } catch {
            alert('errors.generic_error');
        }
    }
}
</script>

