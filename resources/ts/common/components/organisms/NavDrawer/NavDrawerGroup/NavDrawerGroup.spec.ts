import { shallowMount, Wrapper } from '@vue/test-utils';
import NavDrawerGroup from './NavDrawerGroup.vue';

describe('Nav Drawer Organism Component', () => {
  test('Renders the Nav Drawer component', () => {
    const wrapper: Wrapper<NavDrawerGroup> = shallowMount(NavDrawerGroup, {
      propsData: {
        title: 'foo'
      }
    });
    expect(wrapper.findAll(`.NavDrawerGroup`)).toHaveLength(1);
  });
});
