import { create } from 'vue-modal-dialogs';
import { TranslateResult } from 'vue-i18n';
import Dialog from '../components/organisms/Dialog/Dialog.vue';

const dialog = create<string | TranslateResult, boolean, boolean>(
  Dialog,
  'message',
  'isConfirm'
);

export default dialog;
