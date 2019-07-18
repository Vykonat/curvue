<template lang="pug">
  ul.Breadcrumb
    li.item( v-for="(item, i) in items", :key="i" )
      router-link( :to="item.target", v-if="i < items.length - 1" ) {{ item.label }}
      span( v-else ) {{ item.label }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

interface IBreadcrumbItem {
  target: string;
  label: string;
}

@Component
export default class Breadcrumb extends Vue {
  @Prop({ required: true }) items!: IBreadcrumbItem[];
}
</script>

<style lang="scss" scoped>
@import "~styles/app";
@import "~styles/components/breadcrumb";

.Breadcrumb {
  padding: $breadcrumb-padding;
  margin: $breadcrumb-margin;
  list-style: none;
}

.item {
  display: inline-block;
  padding: space() 0;

  &:before {
    padding: space();
    content: $breadcrumb-separator;
  }

  &:first-child {
    &:before {
      padding: 0;
      content: "";
    }
  }
}
</style>

