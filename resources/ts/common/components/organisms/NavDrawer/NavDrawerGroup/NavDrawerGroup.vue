<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NavDrawerGroup extends Vue {
  @Prop({ required: true }) title!: string;
}
</script>



<template lang='pug'>
  .NavDrawerGroup
    strong {{ title }}
    ul
      slot
</template>



<style lang='scss' scoped>
@import '~styles/app';

.NavDrawerGroup {
  display: block;
  margin: 0 0 space(16) 0;

  ul {
    padding: 0;
  }

  strong {
    display: block;
    font-weight: fontWeight('headings');
    font-size: fontSize();
    border-bottom: 1px solid color('divider');
    padding-bottom: space(4);
    margin-bottom: space(16);
  }
}
</style>