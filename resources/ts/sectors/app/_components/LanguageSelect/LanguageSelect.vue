<template lang="pug">
  lvql-select(
      name="language-select",
      id="language-select",
      :options="languages",
      @input="changeLanguage"
  )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LanguageSelect extends Vue {
  languages = [
    { value: 'en', label: 'english' },
    { value: 'fr', label: 'french' }
  ];

  changeLanguage(lang: string) {
    this.$i18n.locale = lang;
  }
}
</script>