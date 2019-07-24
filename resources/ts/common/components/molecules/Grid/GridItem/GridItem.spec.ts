import { shallowMount, Wrapper } from '@vue/test-utils';
import GridItem from './GridItem.vue';

describe('Grid Item Molecule Component', () => {
  test('Renders the grid item component', () => {
    const wrapper: Wrapper<GridItem> = shallowMount(GridItem);
    expect(wrapper.findAll(`.GridItem`)).toHaveLength(1);
  });
});
