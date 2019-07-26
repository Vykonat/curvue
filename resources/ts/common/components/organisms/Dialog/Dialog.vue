<template lang="pug">
  notification(
    :title="notificationTitle",
    :text="message"
  )
    section.buttons( v-if="isConfirm" )
      lvql-button( variant="success", @click="ok" ) {{ $t('core.confirm') }}
      lvql-button( variant="danger", @click="cancel" ) {{ $t('core.cancel') }}
    section.buttons( v-else )
      lvql-button( variant="success", @click="cancel" ) {{ $t('core.ok') }}

</template>

<script lang="ts">
import { DialogComponent } from 'vue-modal-dialogs';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Dialog extends DialogComponent<boolean> {
  @Prop({ default: false }) isConfirm!: boolean;
  @Prop({ default: '', required: true }) message!: string;

  private get notificationTitle() {
    return this.$t('core.new', { resource: 'Notification' });
  }

  cancel(): void {
    this.$close(false);
  }

  ok(): void {
    this.$close(true);
  }
}
</script>

<style lang="scss">
.buttons {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>
