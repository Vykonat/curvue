<template lang="pug">
  article( :class = "cssClasses" )
    svg.circle( viewBox="25 25 50 50" )
      circle(
        class="path",
        cx="50",
        cy="50",
        r="20",
        fill="none",
        stroke-width="2",
        stroke-miterlimit="10",
      )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { variationValidator } from '../../../utils/variationValidator.util';

@Component
export default class lvqlLoader extends Vue {
  @Prop({ default: 'default', validator: variationValidator }) variant!: string;
  @Prop({ default: '' }) size!: string;

  get cssClasses() {
    const classes = ['lvqlLoader'];
    classes.push(`${this.variant}`);
    classes.push(`${this.size}`);
    return classes;
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/app';
@import '~styles/components/loader';

.lvqlLoader {
  display: inline-block;
  position: relative;
  width: $loader-size;
  height: $loader-size;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  &.medium {
    width: $loader-medium-size;
    height: $loader-medium-size;
  }

  &.large {
    width: $loader-large-size;
    height: $loader-large-size;
  }

  &.primary {
    .path {
      stroke: color('primary');
    }
  }

  &.accent {
    .path {
      stroke: color('accent');
    }
  }

  &.success {
    .path {
      stroke: color('success');
    }
  }

  &.warn {
    .path {
      stroke: color('warn');
    }
  }

  &.danger {
    .path {
      stroke: color('danger');
    }
  }

  &.default {
    .path {
      stroke: color('background');
    }
  }

  .circle {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
    stroke: color('text');

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
      }
    }
  }
}
</style>