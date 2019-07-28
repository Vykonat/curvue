import { shallowMount, Wrapper } from '@vue/test-utils';
import NavDrawerGroupItem from './NavDrawerGroupItem.vue';

describe('Nav Drawer Group Item Organism Component', () => {
  test('Renders the Nav Drawer group item component', () => {
    const wrapper: Wrapper<NavDrawerGroupItem> = shallowMount(
      NavDrawerGroupItem,
      {
        propsData: {
          title: 'foo'
        }
      }
    );
    expect(wrapper.findAll(`.NavDrawerGroupItem`)).toHaveLength(1);
  });
});
