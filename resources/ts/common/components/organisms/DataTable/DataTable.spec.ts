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
        'cur-select',
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

  test('Renders the component without search', () => {
    const wrapper: Wrapper<DataTable> = shallowMount(DataTable, {
      propsData: {
        data,
        header,
        showSearch: false
      }
    });

    expect(wrapper.findAll(`.dataTableSearch`)).toHaveLength(0);
  });
});
