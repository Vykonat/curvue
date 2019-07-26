import { shallowMount, Wrapper } from '@vue/test-utils';
import NavigationProgress from './NavigationProgress.vue';

describe('Navigation Progress Molecule Component', () => {
  test('Renders the navigation progress component', () => {
    const wrapper: Wrapper<NavigationProgress> = shallowMount(
      NavigationProgress,
      {
        propsData: {
          isNavigating: false
        }
      }
    );
    expect(wrapper.findAll(`.NavigationProgress`)).toHaveLength(1);
    expect(wrapper.findAll(`.show`)).toHaveLength(0);
  });

  test('Is shown when navigating', done => {
    const wrapper = shallowMount(NavigationProgress, {
      propsData: {
        isNavigating: true
      }
    }) as any;

    const initialWidth = parseInt(wrapper.element.style.width, 10);
    expect(initialWidth).toBe(0);

    setTimeout(() => {
      const width = parseInt(wrapper.element.style.width, 10);
      expect(width).toBeGreaterThan(0);
      expect(width).toBeLessThan(100);
      done();
    }, 200);
  });

  test('Is hidden after navigating', done => {
    const wrapper = shallowMount(NavigationProgress, {
      propsData: {
        isNavigating: true
      }
    }) as any;

    setTimeout(() => {
      expect(parseInt(wrapper.element.style.width, 10)).toBeGreaterThan(0);

      wrapper.setProps({
        isNavigating: false
      });

      setTimeout(() => {
        expect(parseInt(wrapper.element.style.width, 10)).toBe(0);
        done();
      }, 1100);
    }, 200);
  });
});
