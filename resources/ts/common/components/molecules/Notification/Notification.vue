<template lang='pug'>
    article.NotificationWrapper
        collapse-animation
            article.notification( v-if="!dismissed" )
                section.title {{ $t(title) }}
                section.text {{ $t(text) }}

                slot
</template>

<script lang='ts'>
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import CollapseAnimation from '../../../animations/CollapseAnimation/CollapseAnimation.vue'

@Component({
    components: {
        CollapseAnimation: CollapseAnimation,
    },
})
export default class Notification extends Vue {

    @Prop({ required: true }) title!: string
    @Prop({ required: true }) text!: string
    @Prop({ default: 7500 }) duration!: number

    @Provide() dismissed: Boolean = true;

    mounted(): void {
        this.show()
    }

    show(): void {
        this.dismissed = false;
        setTimeout(this.hide, this.duration);
    }

    hide(): void {
        this.dismissed = true;
    }

    confirm( e: Event ) {
        this.dismissed = true;
    }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';
@import '~styles/components/notification';

.NotificationWrapper {
    position: fixed;
    top:      0;
    left:     0;
    right:    0;
    z-index:  $notifications-index;
    padding:  $notifications-padding;

    @include media(tabletLandscape) {
        left:      initial;
        max-width: $notifications-max-width;
    }
}

.notification {
    @include shadow();
    padding:          $notification-padding;
    margin:           $notification-margin;
    position:         relative;
    background-color: $notification-default-bg;
}

.title {
    margin-bottom: space();
    padding-right: space(16);
    color:         color("accent");
}

.text {
    max-height:    $notification-max-height;
    padding-right: space(16);
    margin-bottom: space();
    color:         color("text", "inverse");
}
</style>