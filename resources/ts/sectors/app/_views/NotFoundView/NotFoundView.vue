<template lang="pug">
  lvql-layout( name="Default" )
    h1 Page Not Found
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  metaInfo: {
    ...setMetaInfo('Not Found', 'Lavuql 404 error page', '', ''),
    meta: [
      {
        name: 'robots',
        content: 'noindex'
      }
    ]
  }
})
export default class NotFoundView extends Vue {}
</script>

