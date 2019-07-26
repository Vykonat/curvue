import { shallowMount, Wrapper } from '@vue/test-utils';
import lvqlAvatar from './lvqlAvatar.vue';

describe('Avatar Atom Component', () => {
  const sizes: string[] = ['small', 'medium', 'large'];

  test('Renders the Avatar component', () => {
    const wrapper: Wrapper<lvqlAvatar> = shallowMount(lvqlAvatar, {
      propsData: {
        src: '/foo',
        alt: 'foo'
      },
      stubs: ['lvql-image']
    });
    expect(wrapper.findAll(`.lvqlAvatar`)).toHaveLength(1);
  });

  test('Renders the size variants', () => {
    sizes.forEach((size: string) => {
      const wrapper: Wrapper<lvqlAvatar> = shallowMount(lvqlAvatar, {
        propsData: {
          src: '/foo',
          alt: 'foo',
          size
        },
        stubs: ['lvql-image']
      });
      const actual = wrapper.findAll(`.${size}`);
      const expected = 1;

      expect(actual).toHaveLength(expected);
    });
  });
});
