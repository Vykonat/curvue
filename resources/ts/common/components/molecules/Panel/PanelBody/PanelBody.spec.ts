import { shallowMount, Wrapper } from '@vue/test-utils';
import PanelBody from './PanelBody.vue';

describe('Panel Body Molecule Component', () => {
  test('Renders the panel body component', () => {
    const wrapper: Wrapper<PanelBody> = shallowMount(PanelBody);
    expect(wrapper.findAll(`.PanelBody`)).toHaveLength(1);
  });
});
