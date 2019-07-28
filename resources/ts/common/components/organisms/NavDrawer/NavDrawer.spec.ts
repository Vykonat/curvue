import { shallowMount, Wrapper } from '@vue/test-utils';
import NavDrawer from './NavDrawer.vue';

describe('Nav Drawer Organism Component', () => {
  test('Renders the Nav Drawer component', () => {
    const wrapper: Wrapper<NavDrawer> = shallowMount(NavDrawer);
    expect(wrapper.findAll(`.NavDrawer`)).toHaveLength(1);
  });
});
