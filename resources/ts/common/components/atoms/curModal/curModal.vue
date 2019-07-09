<template lang='pug'>
collapse-animation
    article( v-if="show", :class="modalCssClasses", ref="modal" )
        slot
</template>

<script lang='ts'>
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';

@Component({
    components: {
        CollapseAnimation: () => import(/* webpackChunkName: "Collapse_Animation" */ "../../../animations/CollapseAnimation/CollapseAnimation.vue"),
    }
})
export default class cwdModal extends Vue {
    $refs!: {
        modal: any
    }


    /**************************************************************************
     *  Modal props
     *******************************************************************/
    @Prop({ default: false }) show!: boolean       // Determined if the modal is shown 
    @Prop({ default: false }) fitContent!: boolean // Doesn't fill space in navbar


    /**************************************************************************
     *  Modal computed properties
     *******************************************************************/
    get modalCssClasses() {
        // Returns an array of class names based on passed props
        const classes: string[] = ['Modal'];

        if( this.fitContent ) {
            classes.push('fitContent');
        }

        return classes;
    }


    /**************************************************************************
     * Modal methods
     *******************************************************************/
    handleDocumentClick( e: Event ) {
        // Close the modal if you click outside of it
        if (this.$refs.modal && this.$refs.modal.contains(e.target) === false) {
            this.$emit('close');
        }
    }


    handleDocumentKeyDown( e: KeyboardEvent ) {
        // Closes the modal if the user hits escape
        if ( e.key === 'Escape' ) {
            this.$emit('close');
        }
    }


    beforeMount() {
        document.addEventListener('mousedown', this.handleDocumentClick);
        document.addEventListener('touchstart', this.handleDocumentClick);
        document.addEventListener('keydown', this.handleDocumentKeyDown);
    }


    beforeDestroy() {
        document.removeEventListener('mousedown', this.handleDocumentClick);
        document.removeEventListener('touchstart', this.handleDocumentClick);
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';
@import '~styles/components/modal';

.Modal {
    @include shadow();
    position: fixed;
    top: space();
    left: space();
    bottom: space();
    right: space();
    background: $modal-bg;
    z-index: $modal-index;
    padding: $modal-padding;
    overflow-y: scroll !important;
    -webkit-overflow-scrolling: touch;

    @include media(tabletPortrait) {
        max-width: $modal-max-width;
        max-height: 100%;
        position: fixed;
        top: 50%;
        left: 33%;
        right: 33%;
        bottom: unset;
        transform: translate(0, -50%);
    }
}

.fitContent {
    padding: 0;
    overflow-y: hidden;
    bottom: initial;
}
</style>