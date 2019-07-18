<template lang='pug'>
  article
    | {{ placeholder }}

    article( :class="selectCssClasses" )
      select(
        :title="placeholder",
        :aria-labelledby="id",
        :name="name",
        :id="id",
        v-validate="validation",
        :multiple="multiple",
        :required="required",
        :disabled="disabled",
        :autocomplete="autocomplete",
        v-bind="$attrs",
        v-on="handlers"
      )
        option( v-for="(option, idx) in options" :key="idx" :value="option.value" :selected="isSelected(option)" )
          | {{ option.label }}
        
      i.icon( v-if="!multiple" )
</template>

<script lang='ts'>
import { Component, Vue, Inject, Prop } from "vue-property-decorator";
import { Validator } from "vee-validate";

export interface ISelectOption {
  label: string;
  value: string;
}

@Component
export default class curSelect extends Vue {
  @Inject({ default: new Validator({}, {}) }) $validator;

  @Prop({ required: true }) name!: string;
  @Prop({ required: true }) id!: string;
  @Prop({ required: true }) options!: any[];
  @Prop({ default: "" }) value!: string;
  @Prop() multiple: boolean | undefined;
  @Prop() required: boolean | undefined;
  @Prop() disabled: boolean | undefined;
  @Prop() validation: string | undefined;
  @Prop({ default: "off" }) autocomplete!: string;
  @Prop({ default: "" }) placeholder!: string;

  get isValid() {
    return !this.$validator.errors.first(this.name);
  }

  get selectCssClasses() {
    const classes: string[] = ["curSelect"];

    if (this.multiple) {
      classes.push("multiple");
    }

    if (this.disabled) {
      classes.push("disabled");
    }

    if (!this.isValid) {
      classes.push("error");
    }

    return classes;
  }

  get currentValueAsArray(): string[] {
    return this.value.toString().split("|");
  }

  get handlers() {
    delete this.$listeners.input;

    return {
      ...this.$listeners,
      input: this.onInput
    };
  }

  isSelected(option: ISelectOption): boolean {
    return this.currentValueAsArray.indexOf(option.value) > -1;
  }

  onInput(e: Event) {
    const selected: ISelectOption[] = [];
    const target: HTMLSelectElement = e.target as HTMLSelectElement;
    const length: number = target.options.length;

    for (let i = 0; i < length; i++) {
      const option: any = target.options[i];

      if (option.selected) {
        selected.push({ label: option.label, value: option.value });
      }
    }

    this.$emit(
      "input",
      selected.map((option: ISelectOption) => option.value).join("|")
    );
  }
}
</script>

<style lang='scss' scoped>
@import "~styles/app";
@import "~styles/components/select";

.curSelect {
  overflow: hidden;
  background: $select-bg;
  box-shadow: $select-shadow;
  margin: $select-margin;
  position: relative;
  border: $select-border;

  select::-ms-expand {
    display: none;
  }

  select {
    padding: $select-padding;
    color: $select-color;
    font-size: $select-font-size;
    display: block;
    width: 100%;
    box-shadow: none;
    background: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    &:focus ~ .icon {
      &:before {
        transform: translate(-4px, 0) rotate(45deg);
      }

      &:after {
        transform: translate(4px, 0) rotate(-45deg);
      }
    }
  }
}

.multiple {
  select {
    max-height: $select-multi-max-height;

    option {
      padding: $select-multi-option-padding;
    }
  }
}

.icon {
  position: absolute;
  right: space(24);
  top: space(12);
  height: auto;
  width: auto;

  &:before,
  &:after {
    content: "";
    transition: all 0.25s ease-in-out;
    position: absolute;
    background-color: $select-arrow-color;
    width: space(2);
    height: 13px;
  }

  &:before {
    transform: translate(4px, 0) rotate(45deg);
  }

  &:after {
    transform: translate(-4px, 0) rotate(-45deg);
  }
}

.disabled {
  opacity: 0.6;
}

.error {
  border: 1px solid color("danger");
}
</style>