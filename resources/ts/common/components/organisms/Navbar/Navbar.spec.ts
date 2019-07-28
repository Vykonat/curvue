import { shallowMount, Wrapper } from '@vue/test-utils';
import Navbar from './Navbar.vue';

describe('Navbar Organism Component', () => {
  test('Renders the Navbar component', () => {
    const wrapper: Wrapper<Navbar> = shallowMount(Navbar);
    expect(wrapper.findAll(`.Navbar`)).toHaveLength(1);
  });
});
