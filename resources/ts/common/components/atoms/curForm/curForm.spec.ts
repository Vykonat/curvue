/* eslint-disable no-undef */
import { shallowMount, Wrapper } from '@vue/test-utils';
import curForm from './curForm.vue';

describe('Form Atom Component', () => {
  test('Renders the form component', () => {
    const wrapper: Wrapper<curForm> = shallowMount(curForm, {
      propsData: {
        title: 'Form Test',
        buttonText: 'Form Test'
      },
      stubs: ['cur-button', 'grid-item', 'grid-row']
    });
    expect(wrapper.findAll(`.curForm`)).toHaveLength(1);
  });
});
