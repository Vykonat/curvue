<template lang="pug">
    ResetPasswordForm
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ResetPasswordForm from "../../_components/ResetPasswordForm/ResetPasswordForm.vue";

@Component({
    components: {
        ResetPasswordForm: ResetPasswordForm
    }
})
export default class ResetPasswordView extends Vue {}
</script>

