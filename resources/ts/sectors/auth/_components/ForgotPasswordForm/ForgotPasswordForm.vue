<template lang="pug">
  lvql-form( :title="$t('auth.forgot')", :button-text="$t('auth.forgot')" @submit="submitForgotRequest" )
    template( v-slot:fields )
      grid-row
        grid-item
          lvql-input(
            :name="$('auth.email')",
            :placeholder="$('auth.email_placeholder')",
            id="email",
            type="email",
            validation="required|max:191|email",
            v-model="forgotPasswordForm.email",
            required
          )
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import dialog from '../../../../common/utils/dialog.util';

@Component
export default class RegisterForm extends Vue {
  forgotPasswordForm = {};

  async doSubmit() {
    const response = await this.axios.post(
      '../password/email',
      this.forgotPasswordForm
    );
  }

  async submitForgotRequest() {
    try {
      await this.doSubmit();
      dialog(this.$t('auth.forgot_submitted'), false);
    } catch {
      dialog(this.$t('errors.generic_error'), false);
    }
  }
}
</script>

