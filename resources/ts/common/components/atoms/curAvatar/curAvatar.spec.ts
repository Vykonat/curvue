import { shallowMount, Wrapper } from '@vue/test-utils';
import curAvatar from './curAvatar.vue';

describe('Avatar Atom Component', () => {
  const sizes: string[] = ['small', 'medium', 'large'];

  test('Renders the Avatar component', () => {
    const wrapper: Wrapper<curAvatar> = shallowMount(curAvatar, {
      propsData: {
        src: '/foo',
        alt: 'foo'
      },
      stubs: ['cur-image']
    });
    expect(wrapper.findAll(`.curAvatar`)).toHaveLength(1);
  });

  test('Renders the size variants', () => {
    sizes.forEach((size: string) => {
      const wrapper: Wrapper<curAvatar> = shallowMount(curAvatar, {
        propsData: {
          src: '/foo',
          alt: 'foo',
          size
        },
        stubs: ['cur-image']
      });
      const actual = wrapper.findAll(`.${size}`);
      const expected = 1;

      expect(actual).toHaveLength(expected);
    });
  });
});
