<template lang="pug">
  form.lvqlForm( @submit.prevent="$emit('submit')" )
    grid-row
      grid-item( fill )
        legend.formLegend {{ title }}
        slot( name="fields" )

    grid-row
      grid-item
        lvql-button.formButton( type="submit", variant="primary" ) {{ buttonText }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class lvqlForm extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) buttonText!: string;
}
</script>

<style lang="scss" scoped>
@import '~styles/app';

.lvqlForm {
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: space(12);
  background: color('background', 'light');
}

.formButton {
  width: 100%;
}

.formLegend {
  padding-bottom: space();
  font-size: fontSize('h5');
  font-weight: fontWeight('headings');
}
</style>
