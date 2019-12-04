import { shallowMount, Wrapper } from '@vue/test-utils';
import DataTable from './DataTable.vue';
import { dataTableHeaderFixture, dataTableDataFixture } from './fixtures';

const header = dataTableHeaderFixture;
const data = dataTableDataFixture;

describe('Data Table Organism Component', () => {
  test('Renders the data table component', () => {
    const wrapper: Wrapper<DataTable> = shallowMount(DataTable, {
      propsData: {
        header,
        data
      },
      stubs: [
        'lvql-select',
        'grid-item',
        'grid-row',
        'pagination',
        'panel',
        'panel-body',
        'data-table-header',
        'data-table-search'
      ]
    });

    expect(wrapper.findAll('.dataTableContainer')).toHaveLength(1);
  });

  test('Sorts data by sort key', () => {
    const wrapper = shallowMount(DataTable, {
      propsData: {
        data,
        header
      },
      stubs: [
        'lvql-select',
        'grid-item',
        'grid-row',
        'pagination',
        'panel',
        'panel-body',
        'data-table-header'
      ]
    }) as any;

    wrapper.setProps({ sortKey: 'firstname' });

    expect(wrapper.vm.sortedData[0].firstname).toBe('Julia');
    expect(wrapper.vm.sortedData[1].firstname).toBe('Julia');
    expect(wrapper.vm.sortedData[2].firstname).toBe('Julia');
    expect(wrapper.vm.sortedData[3].firstname).toBe('Julia');

    wrapper.setProps({ sortDirection: 'desc' });

    expect(wrapper.vm.sortedData[0].firstname).toBe('Toni');
    expect(wrapper.vm.sortedData[1].firstname).toBe('Toni');
    expect(wrapper.vm.sortedData[2].firstname).toBe('Toni');
    expect(wrapper.vm.sortedData[3].firstname).toBe('Toni');
  });
});
