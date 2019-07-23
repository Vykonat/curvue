import { shallowMount, Wrapper } from '@vue/test-utils';
import curLayout from './curLayout.vue';

const layouts: string[] = ['Default', 'Admin', 'Sidebar', 'Stack'];

describe('Layout Atom Component', () => {
  test('Renders the layout component', () => {
    const wrapper: Wrapper<curLayout> = shallowMount(curLayout, {
      propsData: {
        name: 'Default'
      }
    });

    expect(wrapper.vm.$slots).toBeTruthy();
  });

  test('Updates the parents layout', () => {
    layouts.forEach((layout: string) => {
      const wrapper: Wrapper<curLayout> = shallowMount(curLayout, {
        propsData: {
          name: layout
        }
      });

      expect(
        wrapper.vm.$parent.$emit('update:layout', `${layout}`)
      ).toBeTruthy();
    });
  });
});
