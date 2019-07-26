import { shallowMount, Wrapper } from '@vue/test-utils';
import lvqlImage from './lvqlImage.vue';

describe('Image Atom Component', () => {
  describe('Image - native', () => {
    test('Renders the Image component', () => {
      const wrapper: Wrapper<lvqlImage> = shallowMount(lvqlImage, {
        propsData: {
          src: '/foo'
        }
      });
      const actual = wrapper.html();
      const expected = '<img src="/foo">';

      expect(actual).toBe(expected);
    });
  });

  describe('Image - div', () => {
    test('Renders the Div component', () => {
      const wrapper: Wrapper<lvqlImage> = shallowMount(lvqlImage, {
        propsData: {
          native: false,
          src: '/foo'
        }
      });
      const actual = wrapper.html();
      const expected = '<div style="background-image: url(/foo);"></div>';

      expect(actual).toBe(expected);
    });
  });
});
