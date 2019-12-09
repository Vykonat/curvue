<template lang="pug">
  collapse-animation
    article( v-show="isShown", :class="modalCssClasses", ref="modal" )
      lvql-button.modalCloseBtn( variant="danger", :is-ghost="true" @click="$emit('close')") 
        i.fas.fa-times 
      slot
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';

@Component({
  components: {
    CollapseAnimation: () =>
      import(
        /* webpackChunkName: "Collapse_Animation" */ '../../../animations/CollapseAnimation/CollapseAnimation.vue'
      )
  }
})
export default class lvqlModal extends Vue {
  $refs!: {
    modal: any;
  };

  @Prop({ default: false }) isShown!: boolean;
  @Prop({ default: false }) fitContent!: boolean;

  get modalCssClasses() {
    const classes: string[] = ['lvqlModal'];

    if (this.fitContent) {
      classes.push('fitContent');
    }

    return classes;
  }

  handleDocumentClick(e: Event) {
    if (this.$refs.modal && this.$refs.modal.contains(e.target) === false) {
      this.$emit('close');
    }
  }

  handleDocumentKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
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

<style lang="scss" scoped>
@import '~styles/app';
@import '~styles/components/modal';

.lvqlModal {
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

.modalCloseBtn {
  float: right;
}

.fitContent {
  padding: 0;
  overflow-y: hidden;
  bottom: initial;
}
</style>
