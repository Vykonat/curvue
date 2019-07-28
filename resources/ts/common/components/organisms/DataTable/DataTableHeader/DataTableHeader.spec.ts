import { shallowMount, Wrapper } from '@vue/test-utils';
import DataTableHeader from './DataTableHeader.vue';
import { IDataTableHeaderItem } from '../interfaces';

describe('Data Table Organism Component', () => {
  const columns: IDataTableHeaderItem[] = [
    { title: 'foo', visible: true, sortKey: 'foo', sortable: true },
    { title: 'bar', visible: true, sortKey: 'bar', sortable: true },
    { title: 'baz', visible: true, sortKey: 'baz', sortable: true },
    { title: 'baz', visible: true, sortKey: 'baz', sortable: false }
  ];
  test('Renders the data table header component', () => {
    const wrapper: Wrapper<DataTableHeader> = shallowMount(DataTableHeader, {
        propsData: {
            columns
        }
    });

    expect(wrapper.findAll('.column')).toHaveLength(4);
  });
});
