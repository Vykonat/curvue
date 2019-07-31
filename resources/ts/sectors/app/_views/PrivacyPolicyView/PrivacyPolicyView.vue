<template lang="pug">
  lvql-layout( name="Default" )
    h1 Privacy Policy View...
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  metaInfo: {
    ...setMetaInfo(
      'Privacy Policy',
      'Lavuql privacy policy page',
      'privacy-policy',
      ''
    )
  }
})
export default class PrivacyPolicyView extends Vue {}
</script>

