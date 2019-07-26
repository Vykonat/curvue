import { shallowMount, Wrapper } from '@vue/test-utils';
import lvqlLayout from './lvqlLayout.vue';

const layouts: string[] = ['Default', 'Admin', 'Sidebar', 'Stack'];

describe('Layout Atom Component', () => {
  test('Renders the layout component', () => {
    const wrapper: Wrapper<lvqlLayout> = shallowMount(lvqlLayout, {
      propsData: {
        name: 'Default'
      }
    });

    expect(wrapper.vm.$slots).toBeTruthy();
  });

  test('Updates the parents layout', () => {
    layouts.forEach((layout: string) => {
      const wrapper: Wrapper<lvqlLayout> = shallowMount(lvqlLayout, {
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
