<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import { Validator }                    from 'vee-validate';

@Component
export default class cwdInput extends Vue {
    /**************************************************************************
     * input injections
     *******************************************************************/
    @Inject({ default: new Validator({}, {})}) $validator: any


    /**************************************************************************
     * input props
     *******************************************************************/
    @Prop({required: true}) name!: string      // The name of the input
    @Prop({required: true}) id!: string        // The id of the input
    @Prop({default: ''}) placeholder!: string  // Placeholder of the input
    @Prop({default: ''}) value!: string        // The inputs currently held value
    @Prop({default: 'text'}) type!: string     // The type of input (text|email|password)
    @Prop({default: ''}) message!: string      // Info message to display
    @Prop({default: ''}) errorMessage!: string // The current error message to display
    @Prop({default: ''}) validation!: string   // The validation to use, check vee-validate docs
    @Prop({default: false}) required!: boolean // Whether or not this field is required
    @Prop({default: false}) disabled!: boolean // whether or not the field is disabled
    @Prop({default: false}) readonly!: boolean // whether or not this field is a read-only value


    /**************************************************************************
     * input computes properties
     *******************************************************************/
    get cssClasses() {
        // Returns an array of classes to use on the input
        const classes: string[] = ['curInput'];

        if( this.disabled ) {
            classes.push('disabled');
        }

        if( this.isValid ) {
            classes.push('valid');
        }

        if( !this.isValid || this.value === '' ) {
            classes.push('error');
        }

        return classes;
    }


    get isValid() {
        // Checks if a field is valid
        return !this.$validator.errors.first(this.name);
    }


    get messageOrError() {
        // Whether to display the info message or error message
        return this.isValid ? this.message : this.errorMessage;
    }


    get handlers() {
        // Extend the scope of the inputs listeners to the parent
        delete this.$listeners.input;

        return {
            ...this.$listeners,
            input: (e: any) => {
                this.$emit('input', e.target.value);
            }
        }
    }
};
</script>



<template lang="pug">
    article( :class = "cssClasses" )
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



<style lang="scss" module>
@import '~styles/app';
@import '~styles/components/input';

.curInput {
    position: relative;
    margin:   $input-margin;
    justify-content: center;

    input,
    input:active,
    input:focus,
    input:hover {
        outline: none !important;
    }

    input {
        background-color: $input-background-color;
        border:           none;
        border-bottom:    $input-border-bottom;
        padding:          $input-padding;
        display:          block;
        width:            100%;
        font-size:        $input-font-size;
        color:            $input-color;
        height:           $input-height;
        border-radius:    0;
    }

    input:focus ~ label,
    input.hasValue ~ label {
        top:         -(space(16));
        font-size:   $input-placeholder-active-font-size;
        font-weight: $input-placeholder-active-font-weight;
        color:       $input-placeholder-active-font-color;
        height:      $input-placeholder-active-height;
    }

    input:focus ~ .bar:before,
    input:focus ~ .bar:after {
        width: 50%;
    }

    label {
        color:          $input-placeholder-color;
        font-size:      $input-placeholder-font-size;
        font-weight:    $input-placeholder-font-weight;
        position:       absolute;
        pointer-events: none;
        top:            $input-placeholder-top;
        transition:     0.2s ease all;
    }
}

.required {
    color:       color("danger");
    font-weight: $input-message-font-weight;
    font-size:   $input-placeholder-font-size / 2;
    margin-left: space(4);
}

.error {
    input {
        border-bottom-color: color("danger");
    }

    input:focus ~ label,
    input.hasValue ~ label {
        color: color("danger");
    }

    .bar {
        &:before,
        &:after {
            background: color("danger");
        }
    }
}

.valid {
    input {
        border-bottom-color: color("success");
    }

    input:focus ~ label,
    input.hasValue ~ label {
        color: color("success");
    }

    .bar {
        &:before,
        &:after {
            background: color("success");
        }
    }
}

.bar {
    position: relative;
    display:  block;
    width:    100%;

    &:before,
    &:after {
        content:    '';
        height:     $input-bar-height;
        width:      0;
        bottom:     0;
        position:   absolute;
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
    display:     block;
    height:      $input-message-height;
    padding:     $input-message-padding;
    position:    relative;
    color:       $input-message-color;
    font-size:   $input-message-font-size;
    font-weight: $input-message-font-weight;

    &.error {
        color: color("danger");
    }
}

.disabled {
    opacity: .6;
}
</style>
