import { shallowMount, Wrapper } from '@vue/test-utils';
import lvqlInput from './lvqlInput.vue';

describe('Input Atom Component', () => {
  test('Renders the input component', () => {
    const wrapper: Wrapper<lvqlInput> = shallowMount(lvqlInput, {
      propsData: {
        label: 'Input Test',
        id: 'input-test',
        name: 'Input Test'
      }
    });

    expect(wrapper.findAll(`.lvqlInput`)).toHaveLength(1);
    expect(wrapper.findAll(`#input-test`)).toHaveLength(1);
  });

  test('Renders the disabled input component', () => {
    const wrapper: Wrapper<lvqlInput> = shallowMount(lvqlInput, {
      propsData: {
        label: 'Input Test',
        id: 'input-test',
        name: 'Input Test',
        disabled: true
      }
    });

    expect(wrapper.findAll(`.disabled`)).toHaveLength(1);
  });

  test('Emits an input event', () => {
    const wrapper: Wrapper<lvqlInput> = shallowMount(lvqlInput, {
      propsData: {
        label: 'Input Test',
        id: 'input-test',
        name: 'Input Test'
      }
    });

    wrapper.find('input').trigger('input');
    expect(wrapper.emitted().input).toBeTruthy();
  });

  test('Prevents input event in disabled state', () => {
    const wrapper: Wrapper<lvqlInput> = shallowMount(lvqlInput, {
      propsData: {
        label: 'Input Test',
        id: 'input-test',
        name: 'Input Test',
        disabled: true
      }
    });

    wrapper.find('input').trigger('input');
    expect(wrapper.emitted().input).toBeFalsy();
  });
});
