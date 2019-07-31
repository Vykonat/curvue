<template lang="pug">
  lvql-layout( name="Default" )
    h1 Terms of use View...
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  metaInfo: {
    ...setMetaInfo('Terms', 'Lavuql terms of use page', 'terms-of-use', '')
  }
})
export default class TermsOfUseView extends Vue {}
</script>

