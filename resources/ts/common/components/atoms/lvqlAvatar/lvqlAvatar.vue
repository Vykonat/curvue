<template lang='pug'>
  lvql-image( :src="src", :alt="alt", :class="avatarCssClasses" )
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class lvqlAvatar extends Vue {
  @Prop({ required: true }) src!: string;
  @Prop({ required: true }) alt!: string;
  @Prop({ default: 'medium' }) size!: string;

  get avatarCssClasses() {
    const classes: string[] = ['lvqlAvatar'];
    classes.push(`${this.size}`);
    return classes;
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';

.lvqlAvatar {
  border-radius: 50%;
}

.small {
  @include size(32);
}

.medium {
  @include size(52);
}

.large {
  @include size(52);
}
</style>