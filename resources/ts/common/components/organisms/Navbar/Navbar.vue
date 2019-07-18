<template lang='pug'>
  header
    nav.Navbar( ref = "nav" )
      section
        slot( name="top" )
      section
        slot( name = "left" )
      section
        slot( name = "middle" )
      section
        slot( name = "right" )
</template>

<script lang='ts'>
import { Component, Vue, Prop, Provide } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>
 
<style lang='scss' scoped>
@import "~styles/app";
@import "~styles/components/navbar";

.Navbar {
  @include shadow();
  width: $nav-bar-width;
  min-height: $nav-bar-height;
  padding: 0;
  z-index: $nav-bar-index;
  position: fixed;
  top: 0;
  left: 0;
  background: $nav-bar-bg;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;

  section {
    flex: 0 0 33.33333333%;
    align-content: center;
    justify-content: center;
    display: flex;

    &:last-child {
      justify-content: flex-end;
    }

    &:first-child {
      flex: 0 0 100%;
      background: color("background", "inverse");
    }
  }
}
</style>