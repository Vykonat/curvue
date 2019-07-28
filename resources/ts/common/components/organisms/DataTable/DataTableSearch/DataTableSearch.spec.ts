import { shallowMount, Wrapper } from '@vue/test-utils';
import DataTableSearch from './DataTableSearch.vue';

describe('Data Table Search Component', () => {
  test('Renders the data table search component', () => {
    const wrapper: Wrapper<DataTableSearch> = shallowMount(DataTableSearch, {
      stubs: ['lvql-input']
    });

    expect(wrapper.isVueInstance()).toBe(true);
  });
});
