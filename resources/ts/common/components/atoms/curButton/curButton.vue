<template lang="pug">
  component(
    :is="tag",
    :to="isRouterLink && target",
    :href="isNormalLink && target",
    :disabled="disabled",
    :class="buttonCssClasses",
    @click="onClick",
    @click.native="onClick",
    ref="button",
    :style="{ width: actualButtonWidth }",
    :event="!isDisabled && isRouterLink ? 'click' : null",
    :tabindex="isDisabled ? -1 : 0",
    :aria-hidden="isDisabled",
  )
    slot.buttonContent( v-if = "loading === false" )
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import { variationValidator } from '../../../utils/variationValidator.util';

@Component
export default class curButton extends Vue {
  $refs!: {
    button: any;
  };

  @Prop({ default: 'default', validator: variationValidator }) variant!: string;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) loading!: boolean;
  @Prop({ default: 'button' }) tag!: string;
  @Prop({ default: '' }) target!: string;
  @Prop({ default: false }) isOutlined!: boolean;
  @Prop({ default: false }) isGhost!: boolean;

  get buttonCssClasses() {
    const classes: string[] = ['ripple', 'curButton'];
    if (this.isOutlined || this.isGhost) {
      classes.push('outlinedButton');
    }
    if (this.isGhost) {
      classes.push('ghostButton');
    }
    if (this.disabled || this.loading) {
      classes.push('disabledButton');
    }
    classes.push(`${this.variant}`);
    return classes;
  }

  get actualButtonWidth() {
    return this.loading && this.$refs.button
      ? `${this.$refs.button.getBoundingClientRect().width}px`
      : null;
  }

  get isDisabled() {
    return this.disabled || this.loading;
  }

  get isRouterLink() {
    return this.tag === 'router-link';
  }

  get isNormalLink() {
    return this.tag === 'a';
  }

  onClick(e: Event) {
    if (this.isNormalLink && this.isDisabled) {
      e.preventDefault;
      e.stopPropagation;
    }

    if (this.isDisabled === false) {
      this.$emit('click', e);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/app';
@import '~styles/components/button';

.curButton {
  display: inline-block;
  margin: $button-margin;
  padding: $button-padding;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  text-transform: $button-text-transform;
  min-width: $button-min-width;
  position: relative;
  overflow: hidden;
  font-family: $button-font-family;
  font-size: $button-font-size;
  font-weight: $button-font-weight;
  border-radius: $button-border-radius;
  transition: $button-transition;
  transition-property: box-shadow, background-color;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  text-decoration: $button-text-decoration;

  &:active {
    box-shadow: $button-active-shadow;
    text-decoration: $button-hover-text-decoration;
  }

  &:hover {
    text-decoration: $button-hover-text-decoration;
  }

  &.disabledButton,
  &[disabled],
  fieldset[disabled] & {
    opacity: $button-disabled-opacity;
    cursor: not-allowed;
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }
}

.ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }

  &:active:before {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
}

@each $variation, $values in $button-variations {
  .#{$variation} {
    color: map-get($values, 'color');
    background: map-get($values, 'bg');
    border: map-get($values, 'border');

    &:hover {
      background: map-get($values, 'hover-bg');
      color: map-get($values, 'hover-color');
      border-color: map-get($values, 'hover-bg');
    }

    :global {
      .loaderPath {
        stroke: map-get($values, 'color');
      }
    }
  }

  .outlinedButton {
    &.#{$variation} {
      color: map-get($values, 'bg');

      &:hover {
        border-color: map-get($values, 'hover-bg');
        color: map-get($values, 'hover-bg');
      }

      :global {
        .loaderPath {
          stroke: map-get($values, 'bg');
        }
      }
    }
  }
}

.outlinedButton {
  border-width: $button-outlined-border-width;
  background: transparent;

  &:hover {
    background: transparent;
  }
}

.ghostButton {
  border-color: transparent;

  &:hover {
    border-color: transparent !important;
  }
}
</style>
