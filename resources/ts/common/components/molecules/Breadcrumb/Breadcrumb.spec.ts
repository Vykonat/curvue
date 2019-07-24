import { shallowMount, Wrapper } from '@vue/test-utils';
import Breadcrumb from './Breadcrumb.vue';

describe('Breadcrumb Molecule Component', () => {
  test('Renders the breadcrumb component', () => {
    const wrapper: Wrapper<Breadcrumb> = shallowMount(Breadcrumb, {
      propsData: {
        items: [{ label: 'Home', href: '/' }, { label: 'test', href: '/test' }]
      },
      stubs: ['router-link']
    });
    expect(wrapper.findAll('ul')).toHaveLength(1);
    expect(wrapper.findAll('li')).toHaveLength(2);
    expect(wrapper.findAll('router-link-stub')).toHaveLength(1);
  });
});
