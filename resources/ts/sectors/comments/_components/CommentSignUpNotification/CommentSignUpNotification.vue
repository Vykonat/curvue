<template lang="pug">
grid-row
    grid-item( fill )
        lvql-button( tag="router-link", :target="{ name: 'auth.register' }" variant="primary" ) {{ $t('comments.sign_up') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CommentSignUpNotification extends Vue {}
</script>
