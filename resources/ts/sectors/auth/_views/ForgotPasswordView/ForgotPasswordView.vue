<template lang="pug">
    ForgotPasswordForm
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ForgotPasswordForm from "../../_components/ForgotPasswordForm/ForgotPasswordForm.vue"

@Component({
    components: {
        ForgotPasswordForm: ForgotPasswordForm
    }
})
export default class ForgotPasswordView extends Vue {}
</script>

