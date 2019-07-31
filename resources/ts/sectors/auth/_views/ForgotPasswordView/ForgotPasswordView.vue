<template lang="pug">
  lvql-layout( name="Default" )
    forgot-password-form
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ForgotPasswordForm from '../../_components/ForgotPasswordForm/ForgotPasswordForm.vue';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  components: {
    ForgotPasswordForm: ForgotPasswordForm
  },
  metaInfo: {
    ...setMetaInfo(
      'Forgot Password',
      'Lavuql forgot password page',
      '/forgot-password',
      ''
    )
  }
})
export default class ForgotPasswordView extends Vue {}
</script>

