<template lang='pug'>
  form.curForm( @submit.prevent="$emit('submit')" )
    grid-row
      grid-item
        h3.formTitle {{ title }}

        slot( name="fields" )

    grid-row
      grid-item
        cur-button.formButton( type="submit", variant="primary" ) {{ buttonText }}
</template> 

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class curForm extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) buttonText!: string;
}
</script>

<style lang='scss' scoped>
@import '~styles/app';

.curForm {
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