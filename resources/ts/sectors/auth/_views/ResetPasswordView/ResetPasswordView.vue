<template lang="pug">
  lvql-layout( name="Default" )
    reset-password-form
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ResetPasswordForm from '../../_components/ResetPasswordForm/ResetPasswordForm.vue';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  components: {
    ResetPasswordForm: ResetPasswordForm
  },
  metaInfo: {
    ...setMetaInfo(
      'Reset Password',
      'Lavuql password reset page',
      'reset-password',
      ''
    )
  }
})
export default class ResetPasswordView extends Vue {}
</script>

