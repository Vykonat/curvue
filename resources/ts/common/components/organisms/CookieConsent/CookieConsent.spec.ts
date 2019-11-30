import { shallowMount, Wrapper } from '@vue/test-utils';
import CookieConsent from './CookieConsent.vue';

describe('Cookie Consent Organism Component', () => {
  test('Renders the cookie consent component', () => {
    const wrapper: Wrapper<CookieConsent> = shallowMount(CookieConsent, {
      propsData: {
        currentVersion: '1.0.0',
        cookieConsentVersion: '1.1.0',
        setCookieConsentVersion: jest.fn()
      }
    });
    expect(wrapper.findAll(`.CookieConsent`)).toHaveLength(1);
  });

  test('Does not render on matched versions', () => {
    const wrapper: Wrapper<CookieConsent> = shallowMount(CookieConsent, {
      data: () => ({
        internalCookieConsentVersion: '1.0.0'
      }),
      propsData: {
        currentVersion: '1.0.0',
        cookieConsentVersion: '1.0.0',
        setCookieConsentVersion: jest.fn()
      }
    });
    expect(wrapper.findAll(`.CookieConsent`)).toHaveLength(0);
  });

  test('Emits the event to update versions', () => {
    const wrapper = shallowMount(CookieConsent, {
      propsData: {
        currentVersion: '1.1.0',
        cookieConsentVersion: '1.0.0',
        setCookieConsentVersion: jest.fn()
      }
    }) as any;
    wrapper.find(`.cookieConsentCloseButton`).trigger('click');
    expect(wrapper.vm.setCookieConsentVersion).toHaveBeenCalledWith('1.1.0');
  });
});
