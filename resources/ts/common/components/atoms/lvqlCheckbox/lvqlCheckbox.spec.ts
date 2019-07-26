/* eslint-disable no-undef */
import { shallowMount, Wrapper } from '@vue/test-utils';
import lvqlCheckbox from './lvqlCheckbox.vue';

describe('Checkbox Atom Component', () => {
  describe('Checkbox', () => {
    test('Renders the checkbox component', () => {
      const wrapper: Wrapper<lvqlCheckbox> = shallowMount(lvqlCheckbox, {
        propsData: {
          label: 'test',
          name: 'test',
          id: 'test'
        }
      });
      expect(wrapper.findAll(`.checkbox`)).toHaveLength(1);
    });

    test('Emits an onClick event', () => {
      const wrapper: Wrapper<lvqlCheckbox> = shallowMount(lvqlCheckbox, {
        propsData: {
          label: 'test',
          name: 'test',
          id: 'test'
        }
      });

      wrapper.find(`.box`).trigger('click');
      expect(wrapper.emitted().click).toBeTruthy();
    });

    test('Prevents click event when disabled', () => {
      const wrapper: Wrapper<lvqlCheckbox> = shallowMount(lvqlCheckbox, {
        propsData: {
          label: 'test',
          name: 'test',
          id: 'test',
          disabled: true
        }
      });
      wrapper.find(`.checkbox`).trigger('click');
      expect(wrapper.emitted().click).toBeFalsy();
    });
  });

  describe('Radio', () => {
    test('Renders the radio component', () => {
      const wrapper: Wrapper<lvqlCheckbox> = shallowMount(lvqlCheckbox, {
        propsData: {
          radio: true,
          label: 'test',
          name: 'test',
          id: 'test'
        }
      });
      expect(wrapper.findAll(`.radio`)).toHaveLength(1);
    });
  });
});
