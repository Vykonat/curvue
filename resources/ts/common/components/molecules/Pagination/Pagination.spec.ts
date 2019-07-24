import { shallowMount, Wrapper } from '@vue/test-utils';
import Pagination from './Pagination.vue';

describe('Pagination Molecule Component', () => {
  test('Renders the Pagination component', () => {
    const wrapper: Wrapper<Pagination> = shallowMount(Pagination, {
      propsData: {
        pages: 1,
        currentPage: 1
      }
    });
    expect(wrapper.findAll(`.Pagination`)).toHaveLength(1);
  });

  test('Emits a page change on click', () => {
    const wrapper: Wrapper<Pagination> = shallowMount(Pagination, {
      propsData: {
        pages: 10,
        currentPage: 1
      }
    });

    wrapper.find(`.next`).trigger('click');
    expect(wrapper.emitted().change).toBeTruthy();
  });

  test('Disables previous click on first page', () => {
    const wrapper: Wrapper<Pagination> = shallowMount(Pagination, {
      propsData: {
        pages: 10,
        currentPage: 1
      }
    });

    wrapper.find(`.prev`).trigger('click');
    expect(wrapper.emitted().change).toBeFalsy();
  });

  test('Disables next click on last page', () => {
    const wrapper: Wrapper<Pagination> = shallowMount(Pagination, {
      propsData: {
        pages: 10,
        currentPage: 10
      }
    });

    wrapper.find(`.next`).trigger('click');
    expect(wrapper.emitted().change).toBeFalsy();
  });
});
