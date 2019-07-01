<template lang="pug">
    RegisterForm
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RegisterForm from "../../_components/RegisterForm/RegisterForm.vue"

@Component({
    components: {
        RegisterForm: RegisterForm
    }
})
export default class RegisterView extends Vue {}
</script>

