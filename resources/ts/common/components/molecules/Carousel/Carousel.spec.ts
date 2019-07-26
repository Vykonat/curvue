import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils';
import Carousel from './Carousel.vue';

const images: any[] = [
  { alt: 'foo', copyright: 'foo', url: 'foo' },
  { alt: 'foo', copyright: 'foo', url: 'foo' },
  { alt: 'foo', copyright: 'foo', url: 'foo' }
];

describe('Carousel Molecule Component', () => {
  test('Renders the carousel component', () => {
    const wrapper: Wrapper<Carousel> = shallowMount(Carousel);
    expect(wrapper.findAll(`.Carousel`)).toHaveLength(1);
  });

  test('Renders carousel with images', done => {
    const wrapper: Wrapper<Carousel> = shallowMount(Carousel, {
      propsData: {
        images
      }
    });

    setTimeout(() => {
      expect(wrapper.findAll('.image')).toHaveLength(1);
      done();
    }, 100);
  });

  test('Changes slide', () => {
    const wrapper = shallowMount(Carousel, {
      propsData: {
        interval: 10,
        images
      }
    }) as any;

    expect(wrapper.vm.currentSlide).toBe(0);

    wrapper.vm.changeSlide();
    expect(wrapper.vm.currentSlide).toBe(1);

    wrapper.vm.changeSlide();
    expect(wrapper.vm.currentSlide).toBe(2);

    wrapper.vm.changeSlide();
    expect(wrapper.vm.currentSlide).toBe(0);

    wrapper.vm.pause = true;
    wrapper.vm.changeSlide();
    expect(wrapper.vm.currentSlide).toBe(0);

    wrapper.vm.pause = false;
    wrapper.vm.changeSlide();
    expect(wrapper.vm.currentSlide).toBe(1);
  });
});
