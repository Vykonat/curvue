import { shallowMount, Wrapper } from '@vue/test-utils';
import PageSection from './PageSection.vue';

describe('Page Section Organism Component', () => {
  test('Renders the Page Section component', () => {
    const wrapper: Wrapper<PageSection> = shallowMount(PageSection, {
      propsData: {
        image: 'foo'
      },
      stubs: ['grid-item', 'grid-row', 'grid', 'lvql-image']
    });
    expect(wrapper.findAll(`.PageSection`)).toHaveLength(1);
  });
});
