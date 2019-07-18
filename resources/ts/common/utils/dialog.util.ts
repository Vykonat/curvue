import { create } from 'vue-modal-dialogs';
import Dialog from '../components/organisms/Dialog/Dialog.vue';
import { TranslateResult } from 'vue-i18n';

const dialog = create<string | TranslateResult, boolean, boolean>(Dialog, 'message', 'isConfirm');

export default dialog;
