import { shallowMount, Wrapper } from '@vue/test-utils';
import PanelHeader from './PanelHeader.vue';

describe('Panel Header Molecule Component', () => {
  test('Renders the panel header component', () => {
    const wrapper: Wrapper<PanelHeader> = shallowMount(PanelHeader, {
      propsData: {
        title: 'Title Test',
        subtitle: 'Subtitle Test'
      }
    });
    expect(wrapper.findAll(`.PanelHeader`)).toHaveLength(1);
    expect(wrapper.find('h5').text()).toBe('Title Test');
    expect(wrapper.find('small').text()).toBe('Subtitle Test');
  });
});
