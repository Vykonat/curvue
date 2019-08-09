<template lang='pug'>
article.Truncate
  section.text(ref = "text")
    slot
    section.fadeOut(
      ref="fadeOut",
      :style="{height: `${height}px`}",
      v-if="!isTruncated"
    )

  span( v-if="!showMoreButton && !permanent && isTruncated" )

  a(
    v-else-if="showMoreButton && !permanent",
    href="#",
    @click.prevent="showMore"
    ) {{ $t('truncate.showMore') }}

  a(
    v-else-if="!showMoreButton && !permanent"
    href="#",
    @click.prevent="showLess"
  ) {{ $t('truncate.showLess') }}

  br( v-else )
</template>

<script lang='ts'>
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import anime from 'animejs';

@Component
export default class Truncate extends Vue {
  $refs!: {
    text: any;
    fadeOut: any;
  };

  @Provide() offsetHeight: number = 0;
  @Provide() collapsedHeight: number = 0;
  @Provide() lineHeight: number = 1.6;
  @Provide() isTruncated: boolean = true;
  @Provide() showMoreButton: boolean = true;

  @Prop({ default: 3 }) lines!: number;
  @Prop({ default: 250 }) duration!: number;
  @Prop({ default: false }) permanent!: boolean;

  get height() {
    return this.lineHeight * (this.lines > 1 ? 2 : 0.6);
  }

  showMore() {
    anime({
      targets: this.$refs.text,
      height: {
        value: `${this.offsetHeight}px`,
        duration: this.duration
      },
      round: 1,
      easing: 'easeInOutCirc',
      complete: () => (this.showMoreButton = false)
    });
    anime({
      targets: this.$refs.fadeOut,
      opacity: {
        value: 0,
        duration: this.duration
      },
      round: 1,
      easing: 'easeInOutCirc',
      complete: () => (this.showMoreButton = false)
    });
  }

  showLess() {
    anime({
      targets: this.$refs.text,
      height: {
        value: `${this.collapsedHeight}px`,
        duration: this.duration
      },
      round: 1,
      easing: 'easeInOutCirc',
      complete: () => (this.showMoreButton = true)
    });
    anime({
      targets: this.$refs.fadeOut,
      opacity: {
        value: 1,
        duration: this.duration
      },
      round: 1,
      easing: 'easeInOutCirc'
    });
  }

  mounted() {
    this.offsetHeight = this.$refs.text.offsetHeight;
    this.lineHeight = parseFloat(
      (window as any).getComputedStyle(this.$refs.text)['line-height']
    );
    this.collapsedHeight = this.lines * this.lineHeight;

    if (this.offsetHeight <= this.collapsedHeight) {
      this.showMoreButton = false;
      this.isTruncated = true;
      return;
    }

    this.isTruncated = false;
    this.showMoreButton = true;
    this.$refs.text.style.height = this.collapsedHeight + 'px';
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';

.Truncate {
  display: block;
}

.text {
  position: relative;
  overflow: hidden;
  line-height: lineHeight('content');
}

.fadeOut {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    color('background', 'light') 100%
  );
}
</style>