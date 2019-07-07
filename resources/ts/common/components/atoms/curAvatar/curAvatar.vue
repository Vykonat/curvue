<template lang='pug'>
cur-image( :src="src", :alt="alt", :class="avatarCssClasses" )
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class curAvatar extends Vue {
    @Prop({ required: true }) src!: string;
    @Prop({ required: true }) alt!: string;
    @Prop({ default: 'medium' }) size!: string;

    get avatarCssClasses() {
        const classes: string[] = ['curAvatar'];

        classes.push(`${this.size}`)

        return classes;
    }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';


.curAvatar {
    border-radius: 50%;
}

.small {
    width: space(32);
    height: space(32);
}

.medium {
    width: space(52);
    height: space(52);
}

.large {
    width: space(84);
    height: space(84);
}
</style>