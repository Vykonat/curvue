import { shallowMount, Wrapper } from '@vue/test-utils';
import Dialog from './Dialog.vue';

describe('Dialog Organism Component', () => {
  test('Renders the dialog component', () => {
    const wrapper: Wrapper<Dialog> = shallowMount(Dialog, {
      mocks: {
        $t: () => {}
      },
      propsData: {
        message: 'test'
      },
      stubs: ['lvql-button', 'notification']
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
