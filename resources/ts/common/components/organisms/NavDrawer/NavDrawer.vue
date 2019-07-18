<template lang='pug'>
  aside( ref="sidebar" )
    button( :class="hamburgerClasses", type="button", aria-label="menu", @click="toggleNavDrawer" )
      span.box
        span.inner
    
    div( :class="navDrawerCssClasses" )
      slot
</template>

<script lang='ts'>
import { Component, Vue, Provide } from "vue-property-decorator";

@Component
export default class NavDrawer extends Vue {
  $refs!: {
    sidebar: any;
  };

  @Provide() open: boolean = false; // Whether or not the nav drawer is open

  get navDrawerCssClasses() {
    const classes: string[] = ["NavDrawer"];

    if (this.open) {
      classes.push("open");
    }

    return classes;
  }

  get hamburgerClasses() {
    const classes: string[] = ["hamburger"];

    if (this.open) {
      classes.push("open");
    }

    return classes;
  }

  get isMobileScreenSize() {
    if (window.matchMedia("(min-width: 728px)").matches) {
      return true;
    }
  }

  toggleNavDrawer() {
    this.open = !this.open;
  }

  determineInitOpen() {
    if (this.isMobileScreenSize) {
      this.open = true;
    } else {
      this.open = false;
    }
  }

  mounted() {
    this.determineInitOpen();
  }

  handleDocumentClick(e: Event) {
    if (this.$refs.sidebar.contains(e.target) === false) {
      this.open = false;
    }
  }

  handleKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case "escape": {
        this.toggleNavDrawer();
      }
    }
  }

  beforeMount() {
    document.addEventListener("click", this.handleDocumentClick);
    document.addEventListener("touchstart", this.handleDocumentClick);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  beforeDestroy() {
    document.removeEventListener("click", this.handleDocumentClick);
    document.removeEventListener("touchstart", this.handleDocumentClick);
    document.removeEventListener("keydown", this.handleKeyDown);
  }
}
</script>

<style lang='scss' scoped>
@import "~styles/app";
@import "~styles/components/navDrawer";

.NavDrawer {
  @include shadow();
  z-index: $nav-drawer-index;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: $nav-drawer-bg;
  color: $nav-drawer-color;
  max-width: $nav-drawer-max-width;
  padding: $nav-drawer-padding;
  margin: $nav-drawer-margin;
  overflow-y: scroll;
  transform: translateX(-100%);
  transition: $nav-drawer-transition;
  width: $nav-drawer-width;
  -webkit-overflow-scrolling: touch;

  &.open {
    transform: translateX(0);
  }
}

.hamburger {
  position: fixed;
  z-index: 100;
  top: $nav-drawer-hamburger-top;
  left: $nav-drawer-hamburger-left;
  padding: $nav-drawer-hamburger-padding;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 250ms;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  border: 0;
  overflow: visible;
  background: transparent;

  .box {
    width: space(32);
    height: space(32);
    display: inline-block;
    position: relative;
  }

  .inner {
    display: block;
    top: 50%;
    margin-top: 0;

    &,
    &::before,
    &::after {
      width: space(32);
      height: space(2);
      background: $nav-drawer-hamburger-color;
      border-radius: 0;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }

    &::before,
    &::after {
      content: "";
      display: block;
    }

    &::before {
      top: (space()) * -1;
    }

    &::after {
      bottom: (space()) * -1;
    }

    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &::before {
      transition: top 0.075s 0.12s ease, opacity 0.075s ease;
    }

    &::after {
      transition: bottom 0.075s 0.12s ease,
        transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.open {
    .inner {
      transform: rotate(45deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::before {
        top: 0;
        opacity: 0;
        transition: top 0.075s ease, opacity 0.075s 0.12s ease;
      }

      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease,
          transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
}
</style>