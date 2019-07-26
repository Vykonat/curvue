<template lang="pug">
  lvql-form( title="Reset Password", button-text="Submit reset request", @submit="submitResetRequest" )
    template( v-slot:fields )
      grid-row
        grid-item
          lvql-input(
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
          lvql-input(
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
          lvql-input(
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
import { Component, Vue } from 'vue-property-decorator';
import dialog from '../../../../common/utils/dialog.util';

@Component
export default class RegisterForm extends Vue {
  resetPasswordForm = {
    token: ''
  };

  async mounted() {
    this.resetPasswordForm.token = this.$route.params.token;
  }

  async doSubmit() {
    const response = await this.axios.post(
      '../password/reset',
      this.resetPasswordForm
    );
    dialog(this.$t('auth.reset_success'), false);
    this.$router.push({ name: 'auth.login' });
  }

  async submitResetRequest() {
    try {
      await this.doSubmit();
    } catch {
      dialog(this.$t('auth.reset_fail'), false);
    }
  }
}
</script>

