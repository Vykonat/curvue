<template lang="pug">
  cur-form( :title="$t('auth.register')", :button-text="$t('auth.register')", @submit="register" )
    template( v-slot:fields )
      grid-row
        grid-item
          cur-input(
            :name="$t('users.name')",
            :placeholder="$t('users.name_placeholder')",
            id="name",
            validation="required|min:3|max:191",
            v-model="registerForm.name",
            required
          )

      grid-row
        grid-item
              cur-input(
                :name="$t('users.email')",
                :placeholder="$t('users.email_placeholder')",
                id="email",
                type="email",
                validation="required|max:191|email",
                v-model="registerForm.email",
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
            v-model="registerForm.password",
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
            v-model="registerForm.password_confirmation",
            required
          )
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import dialog from '../../../../common/utils/dialog.util';

@Component
export default class RegisterForm extends Vue {
  registerForm = {};

  async doRegister() {
    await this.$auth.register({
      params: this.registerForm,
      redirect: false,
      success(response) {
        dialog(this.$t('auth.register_success'), false);
        this.$router.push({ name: 'login' });
        return;
      }
    });
  }

  async register(evt: Event) {
    try {
      await this.doRegister();
    } catch {
      dialog(this.$t('auth.register_fail'), false);
    }
  }
}
</script>
