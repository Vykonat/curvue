import { shallowMount, Wrapper } from '@vue/test-utils';
import DatePicker from './DatePicker.vue';

describe('Date Picker Organism Component', () => {
  test('Renders the date picker component', () => {
    const wrapper: Wrapper<DatePicker> = shallowMount(DatePicker, {
      stubs: ['lvql-input', 'lvql-modal', 'calendar']
    });
    expect(wrapper.findAll(`.DatePicker`)).toHaveLength(1);
  });
});
