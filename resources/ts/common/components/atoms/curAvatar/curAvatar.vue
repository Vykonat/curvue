<template lang='pug'>
  cur-image( :src="src", :alt="alt", :class="avatarCssClasses" )
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class curAvatar extends Vue {
  @Prop({ required: true }) src!: string;
  @Prop({ required: true }) alt!: string;
  @Prop({ default: "medium" }) size!: string;

  get avatarCssClasses() {
    const classes: string[] = ["curAvatar"];
    classes.push(`${this.size}`);
    return classes;
  }
}
</script>

<style lang='scss' scoped>
@import "~styles/app";

.curAvatar {
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