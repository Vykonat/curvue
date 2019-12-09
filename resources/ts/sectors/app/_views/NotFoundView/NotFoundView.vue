<template lang="pug">
  lvql-layout( name="Default" )
    grid-row
      grid-item.notFoundWrapper
        page-section(
          image="assets/images/not_found.svg",
          :title="$t('core.not_found')",
          :link="{ name: 'app.home' }"
        )
          template(v-slot:button)
            | {{ $t('navigation.home') }}
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

<style lang="scss" scoped>
@import '~styles/app';

.image {
  @include media(tabletPortrait) {
    width: 50%;
  }
}

.notFoundWrapper {
  text-align: center;
}
</style>
