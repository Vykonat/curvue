<template lang="pug">
  article( :class = "inputCssClasses" )
    input(
      v-validate="validation",
      :data-vv-as="name",
      :name="name",
      :id="id",
      :required="required",
      :value="value",
      :type="type",
      :autocomplete="type",
      :disabled="disabled",
      :readonly="readonly",
      :class="{ hasValue: value }",
      v-bind="$attrs",
      v-on="handlers",
    )
    span.bar
    label( :for="name" ) {{ placeholder }}
      sup.required( v-if="required" ) *
    span.error.message( v-if="!isValid" ) {{ errors.first(this.name) }}
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import { Validator } from 'vee-validate';

@Component
export default class lvqlInput extends Vue {
  @Inject({ default: new Validator({}, {}) }) $validator: any;

  @Prop({ required: true }) name!: string;
  @Prop({ required: true }) id!: string;
  @Prop({ default: '' }) placeholder!: string;
  @Prop({ default: '' }) value!: string;
  @Prop({ default: 'text' }) type!: string;
  @Prop({ default: '' }) validation!: string;
  @Prop({ default: false }) required!: boolean;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) readonly!: boolean;

  get inputCssClasses() {
    const classes: string[] = ['lvqlInput'];

    if (this.disabled) {
      classes.push('disabled');
    }

    if (this.isValid) {
      classes.push('valid');
    }

    if (!this.isValid || this.value === '') {
      classes.push('error');
    }

    return classes;
  }

  get isValid() {
    return !this.$validator.errors.first(this.name);
  }

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
@import '~styles/components/input';

.lvqlInput {
  position: relative;
  margin: $input-margin;
  justify-content: center;

  input,
  input:active,
  input:focus,
  input:hover {
    outline: none !important;
  }

  input {
    background-color: $input-background-color;
    border: none;
    border-bottom: $input-border-bottom;
    padding: $input-padding;
    display: block;
    width: 100%;
    font-size: $input-font-size;
    color: $input-color;
    height: $input-height;
    border-radius: 0;
  }

  input:focus ~ label,
  input.hasValue ~ label {
    top: -(space(16));
    font-size: $input-placeholder-active-font-size;
    font-weight: $input-placeholder-active-font-weight;
    color: $input-placeholder-active-font-color;
    height: $input-placeholder-active-height;
  }

  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }

  label {
    color: $input-placeholder-color;
    font-size: $input-placeholder-font-size;
    font-weight: $input-placeholder-font-weight;
    position: absolute;
    pointer-events: none;
    top: $input-placeholder-top;
    transition: 0.2s ease all;
  }
}

.required {
  color: color('danger');
  font-weight: $input-message-font-weight;
  font-size: $input-placeholder-font-size / 2;
  margin-left: space(4);
}

.error {
  input {
    border-bottom-color: color('danger');
  }

  input:focus ~ label,
  input.hasValue ~ label {
    color: color('danger');
  }

  .bar {
    &:before,
    &:after {
      background: color('danger');
    }
  }
}

.valid {
  input {
    border-bottom-color: color('success');
  }

  input:focus ~ label,
  input.hasValue ~ label {
    color: color('success');
  }

  .bar {
    &:before,
    &:after {
      background: color('success');
    }
  }
}

.bar {
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: '';
    height: $input-bar-height;
    width: 0;
    bottom: 0;
    position: absolute;
    background: $input-bar-color;
    transition: all 0.2s ease-in-out;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
}

.message {
  display: block;
  height: $input-message-height;
  padding: $input-message-padding;
  position: relative;
  color: $input-message-color;
  font-size: $input-message-font-size;
  font-weight: $input-message-font-weight;

  &.error {
    color: color('danger');
  }
}

.disabled {
  opacity: 0.6;
}
</style>
