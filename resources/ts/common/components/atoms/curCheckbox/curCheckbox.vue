<template lang="pug">
    article( :class = "checkboxCssClasses" )
        input(
            :type           = "inputType",
            :name           = "name",
            :id             = "id",
            :checked        = "checked || value",
            :required       = "required",
            :disabled       = "disabled",
            @change.prevent = "onClick",
            v-bind          = "$attrs"
        )
        section.box( @click = " onClick" )
        label( :for = "name", v-html = "label" )
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import { Validator }                    from 'vee-validate';

@Component
export default class Checkbox extends Vue {
    /**
     * Checkbox validation injection
     */
    @Inject({ default: new Validator({}, {})}) $validator: any


    /**
     * Checkbox props
     */
    @Prop({ required: true }) name!: string;
    @Prop({ required: true }) id!: string;
    @Prop({ required: true }) label!: string;
    @Prop({ default: false }) checked!: boolean;
    @Prop({ default: false }) value!: boolean;
    @Prop({ default: false }) disabled!: boolean;
    @Prop({ default: false }) required!: boolean;
    @Prop({ default: false }) radio!: boolean;
    @Prop({ default: '' }) validation!: string;


    /**
     * Checkbox computed properties
     */
    get inputType() {
        // Returns the tag used on the component
        if ( this.radio ) {
            return 'radio';
        } else {
            return 'checkbox';
        }
    }


    get checkboxCssClasses() {
        // returns an array of classes based on the components prop
        const classes: string[] = [];

        if( this.radio ) {
            classes.push('radio');
        } else {
            classes.push('checkbox');
        }

        if ( this.disabled ) {
            classes.push('disabled');
        }

        return classes;
    }


    /**
     * Checkbox methods
     */
    onClick( e: Event ) {
        if( this.disabled === false ) {
            this.$emit( 'click', e );
            this.$emit( 'input', !Boolean(this.value) )
        }    
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/app';
@import '~styles/components/checkbox';

.checkbox {
    user-select: none;
    display: inline-block;
    margin: $checkbox-margin;
    position: relative;

    label {
        display: inline-block;
        padding-left: $checkbox-size + space(16);
        cursor: pointer;
    }

    .box {
        &:before, &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            cursor: pointer;
            border: 1px solid color("background", "inverse");
        }

        &:before {
            width: $checkbox-size;
            height: $checkbox-size;
            background: $checkbox-bg;
            cursor: pointer;
            transition: $checkbox-transition;
        }

        &:after {
            @include shadow();
            opacity: 0;
            transform: rotate(-45deg) scale(3);
            top: $checkbox-size / 8;
            left: $checkbox-size / 12;
            width: $checkbox-size / 1.2;
            height: $checkbox-size / 2.5;
            border: $checkbox-check;
            border-top: none;
            border-right: none;
            transition-property: opacity, transform;
            transition-duration: 300ms;
            transition-timing-function: cubic-bezier(0, .84, .83, .67);
        }
    }

    input[type="checkbox"] {
        outline: 0;
        margin: $checkbox-check-margin;
        position: absolute;
        top: space(2);
        border: 1px solid color("divider");

        &:focus {
            + .box:before {
                background: $checkbox-checked-bg;
            }
        }

        &:checked {
            + .box:before {
                background: $checkbox-checked-bg;
            }

            + .box:after {
                transform: rotate(-45deg) scale(1);
                opacity: 1;
                transition-property: opacity;
            }
        }
    }
}

.radio {
    user-select: none;
    display: inline-block;
    margin: $checkbox-margin;
    position: relative;

    label {
        display: inline-block;
        padding-left: $checkbox-size + space(16);
        cursor: pointer;
    }

    .box {
        &:before, &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            cursor: pointer;
        }

        &:before {
            width: $checkbox-size;
            height: $checkbox-size;
            background: $checkbox-bg;
            cursor: pointer;
            transition: $checkbox-transition;
            border-radius: 50%;
        }

        &:after {
            @include shadow();
            opacity: 0;
            top: $checkbox-size / 8.5;
            left: $checkbox-size / 8.5;
            width: $checkbox-size / 1.25;
            height: $checkbox-size / 1.25;
            border-radius: 50%;
            background-color: #FFF;
            transition-property: opacity;
            transition-duration: 300ms;
            transition-timing-function: cubic-bezier(0, .84, .83, .67);
        }
    }

    input[type="radio"] {
        outline: 0;
        margin: $checkbox-check-margin;
        left: 6px;
        top: 6px;
        position: absolute;

        &:focus {
            + .box:before {
                background: $checkbox-checked-bg;
            }
        }

        &:checked {
            + .box:before {
                background: $checkbox-checked-bg;
            }

            + .box:after {
                opacity: 1;
            }
        }
    }
}

.disabled {
    opacity: .6;
}
</style>
