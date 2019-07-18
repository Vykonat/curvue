<template lang="pug">
  cur-layout( name="Default" )
    h1 Page Not Found
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFoundView extends Vue {}
</script>

