import { shallowMount, Wrapper } from '@vue/test-utils';
import Calendar from './Calendar.vue';

describe('Calendar Molecule Component', () => {
  test('Renders the calendar component', () => {
    const wrapper: Wrapper<Calendar> = shallowMount(Calendar, {
      mocks: {
        $t: () => {}
      },
      stubs: ['lvql-button']
    });
    expect(wrapper.findAll(`.calendar`)).toHaveLength(1);
    expect(wrapper.findAll(`.body`)).toHaveLength(1);
  });
});
