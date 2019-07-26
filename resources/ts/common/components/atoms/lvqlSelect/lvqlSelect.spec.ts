import { shallowMount, Wrapper } from '@vue/test-utils';
import lvqlSelect from './lvqlSelect.vue';

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
    const wrapper: Wrapper<lvqlSelect> = shallowMount(lvqlSelect, {
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
