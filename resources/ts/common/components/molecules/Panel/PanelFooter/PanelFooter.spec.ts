import { shallowMount, Wrapper } from '@vue/test-utils';
import PanelFooter from './PanelFooter.vue';

describe('Panel Footer Molecule Component', () => {
  test('Renders the panel Footer component', () => {
    const wrapper: Wrapper<PanelFooter> = shallowMount(PanelFooter);
    expect(wrapper.findAll(`.PanelFooter`)).toHaveLength(1);
  });
});
