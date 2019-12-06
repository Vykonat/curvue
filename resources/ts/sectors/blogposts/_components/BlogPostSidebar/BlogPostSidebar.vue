<template lang="pug">
article.SharingComponent
    panel
        panel-body
            h3 SHARE THIS STORY
            //- TODO: change
            social-sharing( :url="appUrl + 'blog-post/' + url", inline-template )
                article.sharing
                    network( network="facebook" )
                        i.fab.fa-facebook.fa-2x
                    network( network="twitter" )
                        i.fab.fa-twitter.fa-2x
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { APP_URL } from '../../../../common/config/app.config';

@Component
export default class BlogPostSidebar extends Vue {
  @Prop({ required: true }) url!: string;

  private get appUrl(): string {
    if (typeof APP_URL !== 'undefined') {
      return APP_URL;
    }

    return 'yourdomain.com';
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';

.SharingComponent {
  text-align: center;
}

.sharing {
  color: color('primary');
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}

.fab {
  margin-right: space(16);
  cursor: pointer;

  &:hover {
    color: color('primary', 'dark');
  }
}
</style>