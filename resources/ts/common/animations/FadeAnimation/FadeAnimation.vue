<template>
    <transition
        enter-class="enter"
        enter-active-class="enterActive"
        enter-to-class="enterTo"
        leave-class="leave"
        leave-active-class="$leaveActive"
        leave-to-class="leaveTo"
    >
        <slot />
    </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FadeAnimation extends Vue {}
</script>

<style lang="scss" scoped>
@import '~styles/app';

.enterActive,
.leaveActive,
.enterTo,
.leaveTo {
    transition: opacity 1000ms ease-in-out;
}

.enterTo,
.leave {
    opacity: 1;
}

.enter,
.leaveTo {
    opacity: 0;
}
</style>
