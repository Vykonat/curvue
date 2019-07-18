<template lang="pug">
  .AdminLayout
    admin-navigation
    .contentBelowNav
      grid
        slot
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdminNavigation from '../../sectors/app/_components/AdminNavigation/AdminNavigation.vue';

@Component({
  components: {
    AdminNavigation: AdminNavigation
  }
})
export default class AdminLayout extends Vue {}
</script>

