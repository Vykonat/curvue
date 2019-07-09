<template lang="pug">
    cur-form( title="Reset Password", button-text="Submit reset request", @submit="submitResetRequest" )
        template( v-slot:fields )
            grid-row
                grid-item
                    cur-input(
                        :name="$t('users.email')",
                        :placeholder="$t('users.email_placeholder')",
                        id="email",
                        type="email",
                        validation="required|max:191|email",
                        v-model="resetPasswordForm.email",
                        required
                    )

            grid-row
                grid-item
                    cur-input(
                        :name="$t('users.password')",
                        :placeholder="$t('users.password_placeholder')",
                        id="password",
                        type="password",
                        validation="required|min:8|confirmed",
                        v-model="resetPasswordForm.password",
                        required
                    )

            grid-row
                grid-item
                    cur-input(
                        :name="$t('users.password_confirmation')",
                        :placeholder="$t('users.password_confirmation_placeholder')",
                        id="password_confirmation",
                        type="password",
                        validation="required",
                        v-model="resetPasswordForm.password_confirmation",
                        required
                    )
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RegisterForm extends Vue {
    resetPasswordForm = {
        token: '',
    };

    async mounted() {
        this.resetPasswordForm.token = this.$route.params.token;
    }

    async doSubmit() {
        const response = await this.axios.post('../password/reset', this.resetPasswordForm);
        alert(this.$t('auth.reset_success'));
        this.$router.push({ name: 'auth.login' });
    }

    async submitResetRequest() {
        try {
            await this.doSubmit();
        } catch {
            alert(this.$t('auth.reset_fail'));
        }
    }
}
</script>

