<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CookieConsent extends Vue {
  @Prop({ required: true }) currentVersion!: string;
  @Prop({ required: true }) cookieConsentVersion!: string;
  @Prop({ required: true }) setCookieConsentVersion!: Function;

  get show() {
    return this.cookieConsentVersion !== this.currentVersion;
  }

  onConsent() {
    this.setCookieConsentVersion(this.currentVersion);
    this.cookieConsentVersion = this.currentVersion;
  }
}
</script>
 
 
 
<template lang='pug'>
  .CookieConsent( v-if="show", ref="cookieConsent" )
    .content
      slot

    .cookieConsentCloseButton( role="button", @click="onConsent", aria-label="Accept cookie consent and close" )
      i.fas.fa-times.fa-2x
</template>
 
 
 
<style lang='scss' scoped>
@import '~styles/app';
@import '~styles/components/cookieConsent';

.CookieConsent {
  position: fixed;
  display: flex;
  flex-direction: row;
  z-index: $cookie-consent-index;
  background-color: $cookie-consent-bg;
  width: 100%;
  bottom: 0;
  transition: opacity 300ms ease-in-out;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.3);
}

.content {
  flex: 1;
  padding: $cookie-consent-content-padding;
  color: $cookie-consent-content-color;
}

.cookieConsentCloseButton {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 space(64);
  background: $cookie-consent-button-bg;
  cursor: pointer;

  i {
    fill: $cookie-consent-icon-color;
  }

  &:hover {
    background-color: $cookie-consent-button-hover-bg;
  }
}

.icon {
  flex: 1;
  text-align: center;
}
</style>