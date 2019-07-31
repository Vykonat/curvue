<template lang="pug">
  lvql-layout( name="Default" )
    h1 The page has timed out
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  metaInfo: {
    ...setMetaInfo('Error', 'Lavuql timout page', '', ''),
    meta: [
      {
        name: 'robots',
        content: 'noindex'
      }
    ]
  }
})
export default class TimeoutView extends Vue {}
</script>

