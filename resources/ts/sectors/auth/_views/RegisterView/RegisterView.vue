<template lang="pug">
  lvql-layout( name="Default" )  
    register-form
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RegisterForm from '../../_components/RegisterForm/RegisterForm.vue';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  components: {
    RegisterForm: RegisterForm
  },
  metaInfo: {
    ...setMetaInfo('Register', 'Lavuql register page', 'register', '')
  }
})
export default class RegisterView extends Vue {}
</script>

