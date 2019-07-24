import { shallowMount, Wrapper } from '@vue/test-utils';
import GridRow from './GridRow.vue';

describe('Grid Row Molecule Component', () => {
  test('Renders the grid row component', () => {
    const wrapper: Wrapper<GridRow> = shallowMount(GridRow);
    expect(wrapper.findAll(`.GridRow`)).toHaveLength(1);
  });
});
