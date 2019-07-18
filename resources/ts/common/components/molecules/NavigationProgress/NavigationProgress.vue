<template lang='pug'>
  article( :class="navProgressCssClasses", :style="{ width: `${percent}%`, transition: transitionStyle }" )
</template>

<script lang='ts'>
import { Component, Vue, Prop, Provide, Watch } from "vue-property-decorator";
import { randomInt } from "../../../utils/generateRandomNumber.util";

@Component
export default class cwdNavigationProgress extends Vue {
  @Prop({ required: true }) isNavigating!: boolean;

  @Provide() widthTransitionDuration: number = 500;
  @Provide() opacityTransitionDuration: number = 350;
  @Provide() interval: any = null;
  @Provide() percent: number = 0;
  @Provide() show: boolean = false;

  startAnimation() {
    this.interval = setInterval(() => {
      this.show = true;
      if (this.percent <= 50) {
        this.percent += randomInt(30, 40);
      } /* istanbul ignore next */ else if (this.percent <= 70) {
        this.percent += randomInt(5, 10);
      } /* istanbul ignore next */ else if (this.percent <= 95) {
        this.percent += randomInt(1, 2);
      } else {
        this.percent = 99;
      }
    }, 100);
  }

  stopAnimation() {
    clearInterval(this.interval);
    this.interval = null;
    this.percent = 100;
    setTimeout(() => {
      this.show = false;
      setTimeout(() => {
        this.percent = 0;
      }, this.opacityTransitionDuration);
    }, this.widthTransitionDuration);
  }

  get navProgressCssClasses() {
    let classes: string[] = ["NavigationProgress"];

    if (this.show) {
      classes.push("show");
    }

    return classes;
  }

  get transitionStyle() {
    return `width ${this.widthTransitionDuration}ms linear, opacity ${this.opacityTransitionDuration}ms`;
  }

  @Watch("isNavigating", { immediate: true })
  onNavigationStart(isNavigating: boolean) {
    if (isNavigating) {
      this.startAnimation();
    } else {
      this.stopAnimation();
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~styles/app";

.NavigationProgress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  height: space(4);
  background: color("primary");
  opacity: 0;
}

.show {
  opacity: 1;
}
</style>