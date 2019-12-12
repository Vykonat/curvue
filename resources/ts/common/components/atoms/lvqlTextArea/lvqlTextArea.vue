<template lang="pug">
textarea.TextArea(
    :v-validate="validation",
    :readonly="readonly",
    :disabled="disabled",
    :required="required",
    :value="value",
    v-bind="$attrs",
    v-on="handlers"
    :cols="cols"
    :placeholder="placeholder",
    :name="name"
)
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject, Watch } from 'vue-property-decorator';
import { Validator } from 'vee-validate';

@Component
export default class TextArea extends Vue {
  @Inject({ default: new Validator({}, {}) })
  $validator: any;

  @Prop({ default: '' }) value!: string;
  @Prop({ default: 60 }) cols!: number;
  @Prop({ default: '' }) validation!: string;
  @Prop({ default: false }) required!: Boolean;
  @Prop({ default: '' }) placeholder!: string;
  @Prop({ default: '' }) name!: string;
  @Prop({ default: false }) readonly!: Boolean;
  @Prop({ default: false }) disabled!: Boolean;

  get handlers() {
    delete this.$listeners.input;

    return {
      ...this.$listeners,
      input: (e: any) => {
        this.$emit('input', e.target.value);
      }
    };
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/app';

.TextArea {
  @include shadow();
  resize: none !important;
  height: 150px;
  width: 100%;
  font-size: fontSize();
  background: color('background', 'dark');
  border-image: none;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  padding: space();
  transition: background-color 0.2s ease 0s;

  &:focus {
    background-color: color('background', 'light');
    outline-width: 0;
  }
}
</style>
