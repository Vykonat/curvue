import { shallowMount, Wrapper } from '@vue/test-utils';
import Truncate from './Truncate.vue';

describe('Truncate Molecule Component', () => {
  test('Renders the untruncated component', () => {
    const wrapper = shallowMount(Truncate, {
      slots: {
        default: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br/>
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet<br/>
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,<br/>
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br/>
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br/>
                no sea takimata sanctus est Lorem ipsum dolor sit amet.`
      },
      mocks: {
        $t: () => {}
      }
    }) as any;
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm.isTruncated).toBeFalsy();
  });

  test('Renders the truncated component', () => {
    const getComputedStyle = window.getComputedStyle;

    (window as any).getComputedStyle = () => {
      return {
        'line-height': 0
      };
    };

    const wrapper = shallowMount(Truncate, {
      propsData: {
        lines: 1
      },
      slots: {
        default: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br/>
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet<br/>
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,<br/>
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br/>
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br/>
                no sea takimata sanctus est Lorem ipsum dolor sit amet.`
      },
      mocks: {
        $t: () => {}
      }
    }) as any;
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm.isTruncated).toBeTruthy();

    (window as any).getComputedStyle = getComputedStyle;
  });

  test('Toggles the truncation', done => {
    const wrapper = shallowMount(Truncate, {
      propsData: {
        duration: 0
      },
      slots: {
        default: `
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br/>
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet<br/>
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,<br/>
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br/>
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br/>
                no sea takimata sanctus est Lorem ipsum dolor sit amet.`
      },
      mocks: {
        $t: () => {}
      }
    }) as any;
    wrapper.vm.isTruncated = true;
    wrapper.vm.showMoreButton = true;

    wrapper.vm.showMore();

    setTimeout(() => {
      expect(wrapper.vm.showMoreButton).toBeFalsy();

      wrapper.vm.showLess();

      setTimeout(() => {
        expect(wrapper.vm.showMoreButton).toBeTruthy();
        done();
      }, 100);
    }, 100);
  });
});
