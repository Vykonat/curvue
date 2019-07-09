<template lang='pug'>
    transition(
        name="collapse",
    )
        slot
</template>

<style lang="scss" scoped>
@import "~styles/app";

.collapse-enter-active,
.collapse-leave-active,
.collapse-enter-active,
.collapse-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
}

.collapse-enter,
.collapse-leave-active {
    opacity: 0;
    transform: translate(0, 100%);
}

.collapse-leave-active,
.collapse-enter {
    opacity: 0;
    transform: translate(0, -100%);
}
</style>