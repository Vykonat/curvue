import { shallowMount, Wrapper } from '@vue/test-utils';
import { brandVariations } from '../../../utils/variationValidator.util';
import lvqlLoader from './lvqlLoader.vue';

const sizes = ['medium', 'primary'];

describe('Loader Atom Component', () => {
  test('Renders the loader component', () => {
    const wrapper: Wrapper<lvqlLoader> = shallowMount(lvqlLoader);
    expect(wrapper.findAll(`.lvqlLoader`)).toHaveLength(1);
  });

  test('Renders the colored variants', () => {
    brandVariations.forEach((variation: string) => {
      const wrapper: Wrapper<lvqlLoader> = shallowMount(lvqlLoader, {
        propsData: {
          variant: variation
        }
      });
      const actual = wrapper.findAll(`.${variation}`);
      const expected = 1;

      expect(actual).toHaveLength(expected);
    });
  });

  test('Renders the size variants', () => {
    sizes.forEach((size: string) => {
      const wrapper: Wrapper<lvqlLoader> = shallowMount(lvqlLoader, {
        propsData: {
          size: size
        }
      });
      const actual = wrapper.findAll(`.${size}`);
      const expected = 1;

      expect(actual).toHaveLength(expected);
    });
  });
});
