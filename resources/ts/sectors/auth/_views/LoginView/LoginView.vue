<template lang="pug">
cur-layout( name="Default" )
    login-form
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginForm from "../../_components/LoginForm/LoginForm.vue";

@Component({
    components: {
        LoginForm: LoginForm
    }
})
export default class LoginView extends Vue {}
</script>

