import { shallowMount, Wrapper } from '@vue/test-utils';
import Notification from './Notification.vue';

describe('Notification Molecule Component', () => {
  test('Renders the notification component', () => {
    const wrapper: Wrapper<Notification> = shallowMount(Notification, {
      propsData: {
        title: 'test',
        text: 'test'
      },
      stubs: ['collapse-animation']
    });
    expect(wrapper.findAll(`.NotificationWrapper`)).toHaveLength(1);
    expect(wrapper.findAll(`.title`)).toHaveLength(0);
    expect(wrapper.findAll(`.text`)).toHaveLength(0);
  });

  test('Shows the notification component when not dismissed', () => {
    const wrapper: Wrapper<Notification> = shallowMount(Notification, {
      propsData: {
        title: 'test',
        text: 'test',
        dismissed: false
      }
    });

    expect(wrapper.findAll(`.title`)).toHaveLength(1);
    expect(wrapper.findAll(`.text`)).toHaveLength(1);
  });

  test('Removes notification after a set time', done => {
    const wrapper: Wrapper<Notification> = shallowMount(Notification, {
      propsData: {
        title: 'test',
        text: 'test',
        duration: 100,
        dismissed: false
      }
    });

    setTimeout(() => {
      expect(wrapper.findAll(`.title`)).toHaveLength(0);
      done();
    }, 100);
  });
});
