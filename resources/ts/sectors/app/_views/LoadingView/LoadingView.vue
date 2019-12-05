<template lang="pug">
  lvql-layout( name="Default" )
    lvql-loader( size="large" )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  metaInfo: {
    ...setMetaInfo('Loading...', 'Lavuql loading page', '', ''),
    meta: [
      {
        name: 'robots',
        content: 'noindex'
      }
    ]
  }
})
export default class LoadingView extends Vue {}
</script>

