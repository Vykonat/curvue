<template lang="pug">
grid-row
    grid-item( fill )
        page-section(
          image="assets/images/no_results.svg",
          :title="$t('core.no_results')",
          :link="{ name: 'app.home' }"
        )
          template(v-slot:button)
            | {{ $t('navigation.home') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NoResultsComponent extends Vue {}
</script>

<style lang="scss" scoped>
@import '~styles/app';
</style>
