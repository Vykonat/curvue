<template lang="pug">
article.markdown( v-html="html", ref="content" )
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import { VNode } from 'vue';

import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

@Component
export default class MarkDown extends Vue {
  $refs!: {
    content: any;
  };

  @Prop({ default: true }) useRouter!: boolean;

  @Provide() html = '';

  createHTML() {
    let text: string = '';
    if (this.$slots.default) {
      this.$slots.default.forEach((slot: VNode) => {
        if (slot.text) {
          slot.text = slot.text.trim().replace(/\n /g, '\n');
          text += `${slot.text}\n`;
        }
      });
    }

    this.html = (marked as any)(text);
  }

  handleClick(event: any) {
    if (this.useRouter === false) {
      return true;
    }

    const { target } = event;
    const url = new URL(target.href);
    const to = url.pathname;

    event.preventDefault();
    this.$router.push(to);
  }

  created() {
    this.createHTML();
  }

  beforeMount() {
    this.createHTML();
  }

  mounted() {
    this.$refs.content.addEventListener('click', this.handleClick);
  }

  updated() {
    this.createHTML();
  }

  beforeDestroy() {
    this.$refs.content.removeEventListener('click', this.handleClick);
  }
}
</script>

<style lang="scss" scoped>
.markdown {
  display: block;
}
</style>
