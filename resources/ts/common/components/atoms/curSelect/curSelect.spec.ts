import { shallowMount, Wrapper } from '@vue/test-utils';
import curSelect from './curSelect.vue';

describe('Select Atom Component', () => {
  const options = [
    {
      label: 'Foo',
      value: 'foo'
    },
    {
      label: 'Bar',
      value: 'bar'
    },
    {
      label: 'Baz',
      value: 'baz'
    }
  ];

  test('Renders the select component', () => {
    const wrapper: Wrapper<curSelect> = shallowMount(curSelect, {
      propsData: {
        options,
        name: 'Select Test',
        id: 'select-test'
      }
    });
    expect(wrapper.findAll('option')).toHaveLength(3);
    expect(wrapper.find('select').attributes().multiple).toBe(undefined);

    wrapper.setProps({ multiple: true });
    expect(wrapper.find('select').attributes().multiple).toBe('multiple');

    wrapper.setProps({ disabled: true });
    expect(wrapper.findAll(`.disabled`)).toHaveLength(1);
  });
});
