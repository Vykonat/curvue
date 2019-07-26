/* eslint-disable no-undef */
import { shallowMount, Wrapper } from '@vue/test-utils';
import lvqlForm from './lvqlForm.vue';

describe('Form Atom Component', () => {
  test('Renders the form component', () => {
    const wrapper: Wrapper<lvqlForm> = shallowMount(lvqlForm, {
      propsData: {
        title: 'Form Test',
        buttonText: 'Form Test'
      },
      stubs: ['lvql-button', 'grid-item', 'grid-row']
    });
    expect(wrapper.findAll(`.lvqlForm`)).toHaveLength(1);
  });
});
