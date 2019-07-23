import { shallowMount, Wrapper } from '@vue/test-utils';
import curImage from './curImage.vue';

describe('Image Atom Component', () => {
  describe('Image - native', () => {
    test('Renders the Image component', () => {
      const wrapper: Wrapper<curImage> = shallowMount(curImage, {
        propsData: {
          src: 'https://www.picsum.photos/1600/900'
        }
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Image - div', () => {
    test('Renders the Image component', () => {
      const wrapper: Wrapper<curImage> = shallowMount(curImage, {
        propsData: {
          native: false,
          src: 'https://www.picsum.photos/1600/900'
        }
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
