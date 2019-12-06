import { shallowMount, Wrapper } from '@vue/test-utils';
import lvqlModal from './lvqlModal.vue';

describe('Modal Atom Component', () => {
  test('Renders and shows the modal component', () => {
    const wrapper: Wrapper<lvqlModal> = shallowMount(lvqlModal, {
      slots: {
        default: `<p>test</p>`
      },
      stubs: ['collapse-animation']
    });
    expect(wrapper.findAll('p')).toHaveLength(0);

    wrapper.setProps({ isShown: true });
    expect(wrapper.findAll('p')).toHaveLength(1);
  });

  test('Registers document events', () => {
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    const wrapper: Wrapper<lvqlModal> = shallowMount(lvqlModal);
    wrapper.destroy();

    expect(document.addEventListener).toHaveBeenCalledTimes(3);
    expect(document.removeEventListener).toHaveBeenCalledTimes(3);
  });

  test('Closes on outside click', () => {
    const wrapper = shallowMount(lvqlModal, {
      propsData: {
        isShown: true
      },
      slots: {
        default: `<p>test</p>`
      },
      stubs: ['collapse-animation']
    }) as any;

    wrapper.vm.$emit = jest.fn();

    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(0);
    wrapper.vm.handleDocumentClick({ target: wrapper.find(`p`).element });
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(0);

    wrapper.vm.handleDocumentClick({ target: null });
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(1);
  });

  test('Closes on escape button', () => {
    const wrapper = shallowMount(lvqlModal, {
      propsData: {
        isShown: true
      },
      slots: {
        default: `<p>test</p>`
      },
      stubs: ['collapse-animation']
    }) as any;

    wrapper.vm.$emit = jest.fn();

    wrapper.vm.handleDocumentKeyDown({ key: 'Enter' });
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(0);

    wrapper.vm.handleDocumentKeyDown({ key: 'Escape' });
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(1);
  });
});
