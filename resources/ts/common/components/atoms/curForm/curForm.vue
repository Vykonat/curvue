<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
 
@Component
export default class Form extends Vue {
    /**************************************************************************
     * Form props
     *******************************************************************/
    @Prop({ required: true }) title!: string      // The header of the form
    @Prop({ required: true }) buttonText!: string // The text on the button
}
</script>
 
 
 
<template lang='pug'>
form.Form( @submit.prevent="$emit('submit')" )
    grid-row
        grid-item
            h3.formTitle {{ title }}

    slot( name="fields" )

    grid-row
        grid-item
            cur-button.formButton( type="submit", variant="primary" ) {{ buttonText }}
</template> 
 
 
 
<style lang='scss' scoped>
@import '~styles/app';

.Form {
    display: flex;
    flex-direction: column;
    align-content: center;
}

.formButton {
    width: 100%;
}

.formTitle {
    text-align: center;
}
</style>