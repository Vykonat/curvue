<template lang='pug'>
  .blogPostStageContainer
    grid
      grid-row
        grid-item( fill )
          h2 {{ APP_NAME }} Blog
          p Some description can go here
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { APP_NAME } from '../../../../common/config/app.config';

@Component
export default class BlogPostStage extends Vue {
  get appName() {
    return APP_NAME;
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';

.blogPostStageContainer {
  text-align: center;
  height: 45vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      60deg,
      hsla(354, 69%, 40%, 1) 0%,
      hsla(354, 69%, 50%, 0.5) 50%,
      hsla(354, 69%, 40%, 1) 100%
    ),
    url('https://picsum.photos/1500/900');
  justify-content: center;
  align-items: center;
}

h2 {
  margin-top: space('xl');
}

h2,
p {
  color: color('text', 'inverse');
}
</style>