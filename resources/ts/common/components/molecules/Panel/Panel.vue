<template lang='pug'>
  .Panel
    slot
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Panel extends Vue {}
</script>
 
<style lang='scss' scoped>
@import '~styles/app';
@import '~styles/components/panel';

.Panel {
  @include shadow();
  background-color: $panel-bg;
  margin: $panel-margin;
  transition: 0.4s all ease-in-out;
  height: calc(100% - 1.6rem);
}
</style>
