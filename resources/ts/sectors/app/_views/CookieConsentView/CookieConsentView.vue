<template lang="pug">
  lvql-layout( name="Default" )
    h1 Cookie Consent View...
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  metaInfo: {
    ...setMetaInfo(
      'Cookie Consent',
      'Lavuql cookie consent page',
      'cookie-consent',
      ''
    )
  }
})
export default class CookieConsentView extends Vue {}
</script>

