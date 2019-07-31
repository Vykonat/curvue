<template lang="pug">
  lvql-layout( name="Default" )
    login-form
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '../../_components/LoginForm/LoginForm.vue';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  components: {
    LoginForm: LoginForm
  },
  metaInfo: {
    ...setMetaInfo('Login', 'Lavuql login page', 'login', '')
  }
})
export default class LoginView extends Vue {}
</script>

