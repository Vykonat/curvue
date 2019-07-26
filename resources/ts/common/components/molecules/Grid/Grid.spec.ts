import { shallowMount, Wrapper } from '@vue/test-utils';
import Grid from './Grid.vue';

describe('Grid Molecule Component', () => {
  test('Renders the grid component', () => {
    const wrapper: Wrapper<Grid> = shallowMount(Grid);
    expect(wrapper.findAll(`.Grid`)).toHaveLength(1);
  });
});
