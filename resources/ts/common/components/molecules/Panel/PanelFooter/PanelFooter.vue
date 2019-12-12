<template lang="pug">
  .PanelFooter
    slot
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PanelFooter extends Vue {}
</script>

<style lang="scss" scoped>
@import '~styles/app';
@import '~styles/components/panel';

.PanelFooter {
  padding: $panel-footer-padding;
}
</style>
