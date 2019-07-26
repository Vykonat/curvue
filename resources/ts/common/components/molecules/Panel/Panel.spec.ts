import { shallowMount, Wrapper } from '@vue/test-utils';
import Panel from './Panel.vue';

describe('Panel Molecule Component', () => {
  test('Renders the Panel component', () => {
    const wrapper: Wrapper<Panel> = shallowMount(Panel);
    expect(wrapper.findAll(`.Panel`)).toHaveLength(1);
  });
});
