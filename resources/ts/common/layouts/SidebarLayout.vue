<template lang="pug">
  .sidebarLayout
    navigation
    grid
      grid-row
        section
          slot
        section
          sidebar
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '../../sectors/app/_components/Navigation/Navigation.vue';
import Sidebar from '../../sectors/app/_components/Sidebar/Sidebar.vue';

@Component({
  components: {
    Navigation: Navigation,
    Sidebar: Sidebar
  }
})
export default class SidebarLayout extends Vue {}
</script>

<style lang="scss" scoped>
@import '~styles/app';

.SidebarLayout {
  section {
    flex: 1 1 100%;

    @include media(tabletPortrait) {
      flex: 0 0 75%;

      &:last-child {
        flex: 0 0 25%;
      }
    }
  }
}
</style>
