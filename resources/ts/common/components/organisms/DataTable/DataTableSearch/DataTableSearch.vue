<template lang='pug'>
  lvql-input(
    id="DataTableSearch",
    name="DataTableSearch",
    :value="value",
    :placeholder="placeholder",
    @input="$emit('input', $event)"
  )
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class DataTableSearch extends Vue {
  @Prop({ default: '' }) value!: string;
  @Prop({ default: '' }) placeholder!: string;
}
</script>