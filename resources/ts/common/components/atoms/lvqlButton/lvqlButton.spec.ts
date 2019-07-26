import { shallowMount, Wrapper } from '@vue/test-utils';
import { brandVariations } from '../../../utils/variationValidator.util';
import lvqlButton from './lvqlButton.vue';

describe('Button Atom Component', () => {
  describe('Button', () => {
    test('Renders the button component', () => {
      const wrapper: Wrapper<lvqlButton> = shallowMount(lvqlButton);
      expect(wrapper.findAll(`.lvqlButton`)).toHaveLength(1);
    });

    test('Renders the button variants', () => {
      brandVariations.forEach((variation: string) => {
        const wrapper: Wrapper<lvqlButton> = shallowMount(lvqlButton, {
          propsData: {
            variant: variation
          }
        });
        const actual = wrapper.findAll(`.${variation}`);
        const expected = 1;

        expect(actual).toHaveLength(expected);
      });
    });

    test('Renders the outlined variation', () => {
      const wrapper: Wrapper<lvqlButton> = shallowMount(lvqlButton, {
        propsData: {
          isOutlined: true
        }
      });

      expect(wrapper.findAll(`.outlinedButton`)).toHaveLength(1);
    });

    test('Renders the ghost variation', () => {
      const wrapper: Wrapper<lvqlButton> = shallowMount(lvqlButton, {
        propsData: {
          isGhost: true
        }
      });

      expect(wrapper.findAll(`.ghostButton`)).toHaveLength(1);
    });

    test('Emits an onClick event', () => {
      const wrapper: Wrapper<lvqlButton> = shallowMount(lvqlButton);
      wrapper.find(`.lvqlButton`).trigger('click');
      expect(wrapper.emitted().click).toBeTruthy();
    });

    test('Does not emit onClick on disabled state', () => {
      const wrapper: Wrapper<lvqlButton> = shallowMount(lvqlButton, {
        propsData: {
          disabled: true
        }
      });
      wrapper.find(`.lvqlButton`).trigger('click');
      expect(wrapper.emitted().click).toBeFalsy();
    });

    test('Does not emit onClick on loading state', () => {
      const wrapper: Wrapper<lvqlButton> = shallowMount(lvqlButton, {
        propsData: {
          loading: true
        }
      });
      wrapper.find(`.lvqlButton`).trigger('click');
      expect(wrapper.emitted().click).toBeFalsy();
    });
  });

  describe('Link', () => {
    test('Renders a router-link', () => {
      const wrapper: Wrapper<lvqlButton> = shallowMount(lvqlButton, {
        propsData: {
          tag: 'router-link',
          target: '/router-test'
        },
        stubs: ['router-link']
      });
      const actual = wrapper.html();
      const expected =
        '<router-link-stub to="/router-test" event="click" tabindex="0" class="ripple lvqlButton default"></router-link-stub>';
      expect(actual).toBe(expected);
    });

    test('renders a native link', () => {
      const wrapper: Wrapper<lvqlButton> = shallowMount(lvqlButton, {
        propsData: {
          tag: 'a',
          target: '/router-test'
        }
      });
      const actual = wrapper.html();
      const expected =
        '<a href="/router-test" tabindex="0" class="ripple lvqlButton default"></a>';

      expect(actual).toBe(expected);
    });

    test('Prevents click event when disabled', () => {
      const wrapper: Wrapper<lvqlButton> = shallowMount(lvqlButton, {
        propsData: {
          tag: 'router-link',
          target: '/router-test',
          disabled: true
        },
        stubs: ['router-link']
      });

      wrapper.find(`.lvqlButton`).trigger('click');
      expect(wrapper.emitted().click).toBeFalsy();
    });
  });
});
